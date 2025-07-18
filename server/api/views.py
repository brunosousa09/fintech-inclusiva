from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import redirect
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Transaction, User
from .serializers import TransactionSerializer, UserRegisterSerializer

class TransactionViewSet(viewsets.ModelViewSet):
    """
    API endpoint que permite aos usuários ver ou editar suas transações.
    """
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Transaction.objects.filter(author=self.request.user).order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permissions_classes = [permissions.AllowAny] # Permite que qualquer um (não autenticado) acesse esta view
    serializer_class = UserRegisterSerializer



def google_login_callback(request):
    try:
        refresh = RefreshToken.for_user(request.user)
        access_token = str(refresh.access_token)
        return redirect(f'http://localhost:5173/fintech-inclusiva/auth/callback?token={access_token}')
    except Exception as e:
        return redirect(f'http://localhost:5173/login?error=social_login_failed')