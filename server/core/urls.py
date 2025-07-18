from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import UserRegisterView
from api.views import UserRegisterView, google_login_callback 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('accounts/', include('allauth.urls')),
    path('api/google-callback/', google_login_callback, name='google_callback'), 

    # Endpoints para obter e atualizar tokens JWT
    path('api/register/', UserRegisterView.as_view(), name='user-register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]