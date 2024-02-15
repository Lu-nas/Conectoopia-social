export class FormPost {
    constructor(idForm, idtextarea, idUlPost) {
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idtextarea);
        this.ulPost = document.getElementById(idUlPost);

        this.addSubmit();
    }

    onSubmit(func) {
        this.form.addEventListener('submit', func);
    }


    formValidate(value) {
        if (value === '' || value === null || value === undefined || value.length < 3) {
            return false
        }
        return true

    }

    getTime() {
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        return `${hour}h ${minutes}min`
    }

    addSubmit() {
        const handleSubmit = (event) => {
            event.preventDefault();
            
            if (this.formValidate(this.textarea.value)) {
                const time = this.getTime();
                const newPost = document.createElement('li');
                newPost.classList.add('post');
                newPost.innerHTML = `
                <div class="infoUserPost">
                    <div class="imgUserPost"></div>
                    
                    <div class="nameAndHour">
                        <strong>Luana</strong>
                        <p>${time}</p>
                    </div>
                </div>

                <p>${this.textarea.value}</p>

                <div class="actionBtnPost">
                    <button type="button" class="filesPost like">
                        <img src="img/heart.svg" alt="Curtir">Curtir
                    </button>
                    <button type="button" class="filesPost comment">
                        <img src="img/comment.svg" alt="Comentar">Comentar
                    </button>
                    <button type="button" class="filesPost share">
                        <img src="img/share.svg" alt="Compartilhar">Compartilhar
                    </button>
                </div>
             `;
                this.ulPost.append(newPost);
                this.textarea.value = "";
            } else {
                alert('Verifique o campo digitado')
            }
        }

        this.onSubmit(handleSubmit)
    }

}

new FormPost('formPost', 'textarea', 'posts');