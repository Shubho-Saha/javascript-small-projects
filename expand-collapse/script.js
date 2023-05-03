console.log('Expand collapse');

// My version of the Solution
// const btns = document.querySelectorAll('.expand-button');
// btns.forEach(btn => {
//     btn.addEventListener('click', e=> {
//         const parent = btn.closest('.card');
//         const cardBody = parent.querySelector('.card-body');
//         if (cardBody.classList.contains('show')) {
//             cardBody.classList.remove('show')
//             btn.innerHTML = 'Expand'
//         } else {
//             cardBody.classList.add('show')
//             btn.innerHTML = 'Collapse';
//         }
//     })
// })


// Simplified Version of the solution
document.addEventListener('click', e=> {
    if (!e.target.matches('.expand-button')) return 

    const parent = e.target.closest('.card');
    const cardBody = parent.querySelector('.card-body');
    cardBody.classList.toggle('show');

    e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand';
})
