from random import randint
from ninja import NinjaAPI


api = NinjaAPI()


@api.get("/chartData", operation_id="getSensorData", tags=["charts"])
def get_chart_data(request):
    """Mock sensor data for frontend"""
    chart_values = [randint(300, 1000) for i in range(7)]
    return {"data": chart_values}
