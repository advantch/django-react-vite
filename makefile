build-docker:
	docker build -t django-react .

build-frontend:
	npm run build

build: build-frontend build-docker 

deploy-to-hub:
	docker tag django-react thembahank/django-react
	docker push thembahank/django-react

run-local:
	export PORT=8000
	docker run -p ${PORT}:8000 -d django-react

pg-url:
	export DATABASE_URL=postgres://root:rootpassword@localhost:5432/postgres

# nomad
deploy-to-nomad:
	nomad job plan app.nomad
	nomad job run app.nomad

check_status: # Check the status of the cluster
	nomad job status ${JOB_NAME}

exec_on_task: # create superuser
	nomad job status ${JOB_NAME}
	nomad exec ${ALLOC_ID} python manage.py createsuperuser
