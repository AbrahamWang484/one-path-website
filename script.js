const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-nav');
if(menu) menu.addEventListener('click',()=>mobile.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));
const form=document.getElementById('bookingForm');
const status=document.getElementById('status');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('New Limo Quote Request');const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\nDate: ${d.get('date')}\nPassengers: ${d.get('passengers')||'Not specified'}\n\nTrip details:\n${d.get('details')||'None'}`);window.location.href=`mailto:info@example.com?subject=${subject}&body=${body}`;status.textContent='Opening your email app...';});
