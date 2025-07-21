from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet
from .views import TransactionViewSet, CurrentUserView

router = DefaultRouter()
router.register(r'transactions', TransactionViewSet, basename='transaction')

urlpatterns = [
    path('', include(router.urls)),
    path('users/me/', CurrentUserView.as_view(), name='current-user'),
]