const formAction = document.getElementById("formAction");

const uploadFile = document.getElementById("uploadFile");

formAction.addEventListener("submit", (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append(uploadFile.files[0])
    fetch('http://localhost:800/upload', {
            method: 'POST',
            body: {
                file: formData
            }
        }).then((res) => res.json()
            .then(data => console.log(`my upload files is : ${data}`)))
        .catch(err => console.log(`error : ${err}`))
})