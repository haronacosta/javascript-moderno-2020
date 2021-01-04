// Switch para evaluar múltiples condiciones

const metodoPago = 'efectivo';

switch (metodoPago) {
  case 'efectivo':
    pagar();
    break;
  case 'tarjeta':
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case 'cheque':
    console.log(`Pagaste con ${metodoPago}`);
    break;

  default:
    console.log(
      'Aún no ha seleccionado método de pago o método depago no soportado'
    );
    break;
}

function pagar() {
  console.log('Pagando...');
}
