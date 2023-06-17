from rest_framework.views import APIView


# %% reafactor para django
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response


# Importa el módulo de mercadopago
import mercadopago

# Agrega credenciales
TEST_ACCESS_TOKEN = (
    "TEST-2305067427866064-060706-744e487be3993329908278932d8490bb-12163859"
)

sdk = mercadopago.SDK(TEST_ACCESS_TOKEN)


class CreatePaymentAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Crea los datos de preferencia del pago
        preference_data = {
            "back_urls": {
                "success": "aquí va la página a la que se redireccionará si la compra fue exitosa"
            },
            "items": [
                {
                    "title": "Mi plan de salud",
                    "quantity": 1,
                    "unit_price": 1000,  # esto hay que conectarlo al front para que tome el valor de ahi para cualquiera de los 3 precios
                    "currency_id": "ARS",
                }
            ],
            "notification_url": "",
        }

        # Crea la preferencia de pago
        preference_response = sdk.preference().create(preference_data)
        preference = preference_response["response"]
        preference_url = preference["sandbox_init_point"]

        # Retorna la URL de la preferencia de pago
        return Response({"payment_url": preference_url})
