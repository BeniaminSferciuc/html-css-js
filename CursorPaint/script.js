const container = document.querySelector(".container");

        const hexColors = [
            "#FF0000", // Roșu
            "#00FF00", // Verde
            "#0000FF", // Albastru
            "#FFFF00", // Galben
            "#FF00FF", // Magenta
            "#00FFFF", // Cian
            "#800080", // Violet
            "#FFA500", // Portocaliu
            "#008000", // Verde închis
            "#FFFFFF", // Alb
        ];

        const randomColor = (colors) => {
            return Math.floor(Math.random() * colors.length);
        };

        for (let i = 0; i < 10000; i++) {
            const div = document.createElement("div");
            container.append(div);
            div.classList.add("square");

            div.addEventListener("mouseenter", function (event) {
                let randomNumber = randomColor(hexColors);
                let color = hexColors[randomNumber];

                let element = event.target;

                element.style.backgroundColor = color;

                setTimeout(() => {
                    element.style.backgroundColor = 'black';
                }, 750)
            });

            div.addEventListener('click', (event) => {
                let e = event.target;

                e.style.width = '30px';
                e.style.height = '30px';
            })
        }