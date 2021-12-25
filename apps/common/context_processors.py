from django.conf import settings

def settings_context(request):
    """
    Settings available by default to the templates context.
    """
    return {
        "DEBUG": settings.DEBUG,
        "database": "POSTGRESQL" if settings.DB_IS_PGSQL else "MYSQL",
    }