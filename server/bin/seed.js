const mongoose = require('mongoose')
const dbName = 'mongoose-site'

mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const Site = require('../models/site.model.js')

const sites = [
   
    {
        name: 'The Abbey Bookshop',
        imageUrl:'https://9968c6ef49dc043599a5-e151928c3d69a5a4a2d07a8bf3efa90a.ssl.cf2.rackcdn.com/15785-3.jpg',
        description: 'Mejor libería de libros en Inglés segunda mano y cafetería',
        service: 'Librairie',
        pending: true,
        price: '€€'
    
    },
    {
        name: 'Shakespeare and Company',
        imageUrl:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2014/03/24/13956272436989.jpg',
        description: 'Shakespeare & Company es la mejor librería de París, quizás de Europa.',
        service: 'Librairie',
        pending: true,
        price: '€€'
    },
    {
        name: 'San Francisco Book Company',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d4/San_Francisco_Book_Company%2C_17_Rue_Monsieur-le-Prince%2C_Paris%2C_July_2013.jpg',
        description: 'San Francisco Book Company es una visita obligada para aquellos que buscan comprar libros en inglés de segunda mano (incluidos libros sobre París y Francia en general). por un precio razonable. Aquí hay una historia, cómo visitar y cosas que debe saber antes de ir.',
        service: 'Librairie',
        pending: false,
        rate: 8,
        price: '€€'
    },
    {
        name: 'WHSmith',
        imageUrl:'https://9968c6ef49dc043599a5-e151928c3d69a5a4a2d07a8bf3efa90a.ssl.cf2.rackcdn.com/9123-3.jpg',
        description: 'W.H. Smith es una cadena británica de librerías con numerosas sucursales en todo el Reino Unido. La librería parisina se encuentra en la larga Rue de la Rivoli, cerca de la Place de la Concorde. Es la única sucursal europea fuera del Reino Unido. Su oferta es más o menos típica de una cadena de tiendas.',
        service: ['Librairie', 'café', 'Thé','nourriture anglaise', 'boissons'],
        pending: false,
        rate: 7,
        price: '€€€'
    },
    {
        name: 'Galignani',
        imageUrl:'https://media.traveler.es/photos/61378846bae07f0d8a4951c8/master/w_1600,c_limit/52767.jpg',
        description: 'Librairie Galignani es la librería inglesa más antigua del continente y, según muchos, también es la librería más elegante de la ciudad de París. Esta librería independiente ha sido dirigida por seis generaciones de la familia Galignani y ha sido un hito para todos los parisinos y visitantes de la ciudad que buscan inglés desde 1801.',
        service: 'Librairie',
        pending: true,
        price: '€€€'
    },
    {
        name: 'Angelina',
        imageUrl:'https://mapasymochila.com/wp-content/uploads/2021/01/IMG_3749-scaled-780x470.jpg',
        description: 'Inaugurada en 1903 por el confitero austriaco Antoine Rumpelmayer, Angelina se ha convertido pronto en un lugar muy popular entre la aristocracia parisina. A Coco Chanel y Proust les encantó venir a este elegante y encantador café. Edouard-Jean Niermans, el famoso arquitecto de la "Belle Époque", que diseñó el interior de Angelina, quiso dar un sentido de romanticismo y poesía a esta sala de té. No es de extrañar que este lugar sea tan popular entre los gourmets parisinos, pero también entre los turistas. Por lo tanto, prepárate para esperar pacientemente en la fila, antes de que se te permita entrar en este templo de dulzura.',
        service: ['Café','Chocolat', 'Gâteaux'],
        pending: true,
        price: '€€'
    },
    {
        name: 'Ocho y Medio Librería',
        imageUrl:'https://imagenes.elpais.com/resizer/L_fMBRNRaQIo2IcqCD3HpLTcQ14=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/AX7HP6APHRB33AW2NQW4JMR4DU.Jpg',
        description: 'Librería especializada en el cine, que organiza cursos, vende delicatessen y cuenta con cafetería y terraza.',
        service: ['Café','Librairie', 'cinéma'],
        pending: false,
        rate:9,
        price: '€€€'
    },
    {
        name: 'La Central',
        imageUrl:'https://cronicaglobal.elespanol.com/uploads/s1/37/39/19/3/la-central_11_1000x528.jpeg',
        description: 'Situada en una casa palacio de 1.200 m2, La Central de Callao alberga más de 70.000 volúmenes de fondo especializado en filosofía, historia, ciencias sociales y literatura. En las tres plantas del edificio también puedes encontrar un café-restaurante (El bistró) y una coctelería (El garito), así como una variada programación de actividades culturales.',
        service: ['Librairie', 'cafe','bar à cocktails'],
        pending: false,
        rate:8,
        price: '€€€'
    }
]

Site.create(sites)
   .then(sites => console.log(`Se han creado ${sites.length} cafes y librerias en la DDBB`))
   .catch(err => console.log(err))