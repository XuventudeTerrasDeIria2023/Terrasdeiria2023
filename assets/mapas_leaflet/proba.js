var map = L.map('map', {
									center: [42.764553524954444, -8.697332608696819],
									zoom: 12,
									maxBounds: [
										[42.764553524954444, -8.697332608696819],
										//				[40, 6.24]
									],
									minZoom: 5,
									maxZoom: 17
								});

								L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
									attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								}).addTo(map);

							</script>
							<script>
								var Icono = L.icon({
									iconUrl: "https://vivaelsoftwarelibre.com/wp-content/uploads/2020/05/icono.png",
									iconSize: [30, 40],
									iconAnchor: [15, 40],
									shadowUrl: "https://vivaelsoftwarelibre.com/wp-content/uploads/2020/05/icono_sombra.png",
									shadowSize: [35, 50],
									shadowAnchor: [0, 55],
									popupAnchor: [0, -40]
								});

								var Rois = L.marker([42.76084254114734, -8.690341271164895], {
										title: "Concello de Rois",
										draggable: false,
										opacity: 1,
										icon: Icono
									}).bindPopup("<i>Concello de Rois</i>")
									.addTo(map);

								var Dodro = L.marker([42.72101583932246, -8.704769329976834], {
										title: "Concello de Dodro",
										draggable: false,
										opacity: 0.5,
										icon: Icono
									}).bindPopup("<p>Concello de Dodro</p>")
									.addTo(map);

								var Padron = L.marker([42.73853030874309, -8.66049611819666], {
										title: "Concello de Padrón",
										draggable: false,
										opacity: 0.75,
										icon: Icono
									}).bindPopup("<h2>Concello de Padrón</h2>")
									.addTo(map);
