const url = "https://last-airbender-api.fly.dev/api/v1/characters?name=";



const search = () => {
    const value = document.getElementById("input").value;

    fetch(url + value)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            const result = document.querySelector(".result");
            result.innerHTML = '';
            
            json.forEach((el) => {
                const character = document.createElement('div');
                character.classList.add('item')
                character.innerHTML = `
                    <img src="${el.photoUrl}" alt"${el.name}"/>
                    <h4>${el.name}</h4>
                    <h4>${el.affiliation}</h4>
                `

                result.appendChild(character);

            })



            // json.forEach((el) => {
            //     character.innerHTML = `
            //         <h4>${el.name}</h4> 
            //     `;
            //     character.querySelector('h4').style.color = 'black';
            //     character.querySelector('h4').style.fontSize = '20px';
            //     character.querySelector('h4').style.marginBottom = '10px';
            //     result.appendChild(character);
            // })



            // json.forEach((el) => {
            //     affiliations.innerHTML = `
            //     <p>${el.affiliation}</p>            
            //     `;
            //         affiliations.querySelector('p').style.color = 'black';
            //         affiliations.querySelector('p').style.fontSize = '16px';
            //         affiliations.querySelector('p').style.display = 'flex';
            //         affiliations.querySelector('p').style.marginBottom = '40px';
            //     result.appendChild(affiliations);

                
            // })

        })
        .catch(error => console.log(error))

        document.getElementById("input").value = '';
}

const btn = document.getElementById("btn");
btn.addEventListener('click', search)