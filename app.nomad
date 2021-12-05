job "djangoreact" {
    # https://stackoverflow.com/questions/63601913/nomad-and-port-mapping
  datacenters = ["dc1"]

  constraint {
    attribute = "${attr.unique.hostname}"
    operator  = "regexp"
    value     = "nomad-cluster-general-client-[0-9]+$"
  }

  group "djangoreact" {
    count = 1

    network {
      port  "djhttp"{
        to = 8000
      }
    }

    service {
      name = "djangoreact"
      port = "djhttp"

      tags = [
        "traefik.enable=true",
        "traefik.http.routers.app.entryPoints=http,websecure",
        "traefik.http.routers.app.rule=Host(`django-react.advantch.com`)", 
      	"traefik.http.routers.app.tls.certResolver=myresolver",
      ]

      check {
        type     = "http"
        path     = "/ht/"
        interval = "60s"
        timeout  = "2s"
      }
    }

    task "djangoreact" {
      vault {
        policies = ["default_nomad_job"]
        change_mode   = "signal"
        change_signal = "SIGUSR1"
      }

      env {
        DATABASE_URL="postgresql://root:rootpassword@postgres.service.consul:5432/postgres"
        DB_IS_PGSQL="True"
      }

      driver = "docker"

      config {
        image = "thembahank/django-react"
        ports = ["djhttp"]
      }
    }
  }
}