app.controller('barCtrl', ['$scope', function ($scope) {
	this.datos = [
		{
			nombre: "Blu",
			slogan: "Nigth Club",
			logotipo: "img/Blu.jpg"
		},
		{
            nombre: "Hijole",
            slogan: "Cantina & Bar",
            logotipo: 'img/Hijole.jpg'
        },
        {
            nombre: "Los Rieles",
            slogan: "Antro & Banda",
            logotipo: 'img/Rieles.jpg'
        }
	]
}])