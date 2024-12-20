$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true
    });


    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');


    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "O nome deve ter pelo menos 3 caracteres."
            },
            email: {
                required: "Por favor, insira um e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone."
            },
            cpf: {
                required: "Por favor, insira seu CPF."
            },
            endereco: {
                required: "Por favor, insira seu endereço."
            },
            cep: {
                required: "Por favor, insira o CEP."
            }
        },
        
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            form.submit();
        }
    });
});
