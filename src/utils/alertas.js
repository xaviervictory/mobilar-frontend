import Swal from 'sweetalert2'

// Alerta de SweetAlert2 con el estilo oscuro de NOIR
export function mostrarAlerta(icon, title, text = '') {
  return Swal.fire({
    icon,
    title,
    text,
    background: '#111',
    color: '#fff',
    confirmButtonColor: '#d4ff8a',
  })
}
