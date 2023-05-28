window.addEventListener('DOMContentLoaded', (event) => {
    // Obtém todos os links da barra de navegação
    const navLinks = document.querySelectorAll('nav ul li a');

    // Adiciona um evento de clique a cada link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtém o alvo da rolagem (a partir do atributo "href" do link)
            const targetId = link.getAttribute('href');
            
            // Obtém o elemento de destino
            const targetElement = document.querySelector(targetId);

            // Obtém a altura da janela de visualização
            const windowHeight = window.innerHeight;

            // Obtém a altura do elemento de destino
            const targetHeight = targetElement.offsetHeight;

            // Calcula o deslocamento vertical adicional para posicionar o conteúdo no meio da página
            const additionalOffset = (windowHeight - targetHeight) / 2;

            // Rola a página suavemente até o elemento de destino, com o deslocamento vertical adicional
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
                inline: "nearest",
                offsetTop: additionalOffset
            });  
        });
    });
});






