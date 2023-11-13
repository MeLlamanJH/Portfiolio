let Commands = {};

// Shows available commands
Commands['help'] = () => {
    commandList.innerHTML += 'Aquí tienes una lista con todos los comandos disponibles :)<br>'
    commandList.innerHTML += `<span style="color: #24f">           
                              - ls<br>
                              - info<br>
                              - cls<br>
                              - help<br>
                              - destroy<br>
                              - hello<br>
                              - gymstats
                              </span>`
};

// Shows personal information
Commands['info'] = () => {
    commandList.innerHTML += 'Hola! soy @m06_dev soy estudiante de 2ndo un ciclo de SMR/SMX';
};

// Shows social media list
Commands['ls'] = () => {
    for (i = 0; i < Config['socialMedia'].length; i++) {
        commandList.innerHTML += `<a class="command-ls-link" target="_blank" href="${Config['socialMedia'][i].link}">${Config['socialMedia'][i].name}</a>`;
    };
};

// Clear the terminal
Commands['cls'] = () => {
    commandList.innerHTML = '';
};

// When the command is null do nothing
Commands[''] = () => {};

// Shows a funny meme of hacker
Commands['hacker'] = () => {
    commandList.innerHTML += '<img src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-165.gif" alt="Super mega master pro debiloper" style="width: 50%; border-radius: .4vw;">';
};

Commands['destroy'] = () => {
    let body = document.querySelector('body');
    body.style.display = 'none';
};

Commands['hello'] = () => {
    commandList.innerHTML += 'Hola mundo! 🤓👨‍💻';
};

Commands['gymstats'] = () => {
    
    commandList.innerHTML += '<span style="color: #FF0000">SQUAD: 130kg<br>';
    commandList.innerHTML += '<span style="color: #FF0000">BENCH PRESS: 70kg';
};