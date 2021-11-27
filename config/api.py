from ninja import NinjaAPI

api = NinjaAPI()

@api.get("/test")
def add(request):
    return {"result": "ok"}
