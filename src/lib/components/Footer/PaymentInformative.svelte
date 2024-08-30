<script lang="ts">
  import paymentGatewaysLogo from "$lib/assets/designs/payment_logos.png";
</script>

<div class="flex flex-row flex-wrap gap-2">
  <p class="text-xs w-full md:max-w-xs text-wrap text-justify">
    El pago se puede realizar de forma segura a PayPal, Google Pay, Apple Pay,
    Amazon Pay, Tarjeta de crédito, Transferencia bancaria, Contra reembolso,
    financiado con Cetelem o financiado con Sequra.
  </p>
  <img src={paymentGatewaysLogo} alt="Payment Methods" class="h-16" />
</div>
