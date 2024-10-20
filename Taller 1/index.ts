class Serie {
  id: number;
  title: string;
  channel: string;
  seasons: number;
  description: string;
  link: string;
  image: string;

  constructor(id: number, title: string, channel: string, seasons: number, description: string, link: string, image:string) {
      this.id = id;
      this.title = title;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.image = image;
  }
}
const table = document.getElementById('seriesTable');
const tbody = document.querySelector("#seriesTable tbody") as HTMLTableSectionElement;

const series: Serie[] = [
  new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
      "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
      
      new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
        "https://i.imgur.com/TDCEV1S.jpg"),
        
        new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
          "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
          
          new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
            "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
            
            new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
              "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
            ];
// Iterar sobre las series y añadirlas a la tabla
var seasonAvg = 0;
series.forEach((serie) => {
  seasonAvg += serie.seasons;
  console.log(serie);
  const row = document.createElement('tr');
  row.classList.add('table-secondary');
  
  // Crear celdas y asignarles valores
  const idCell = document.createElement('td');
  idCell.classList.add('ids');
  idCell.textContent = serie.id.toString();
  row.appendChild(idCell);
  
  const titleCell = document.createElement('td');
  const link = document.createElement('a');
  link.href = serie.link;
  link.textContent = 'More Info';
  link.target = '_blank'; // Para abrir en una nueva pestaña
  link.textContent = serie.title;
  titleCell.appendChild(link);
  row.appendChild(titleCell);

  const channelCell = document.createElement('td');
  channelCell.textContent = serie.channel;
  row.appendChild(channelCell);

  const seasonsCell = document.createElement('td');
  seasonsCell.textContent = serie.seasons.toString();
  row.appendChild(seasonsCell);


  // Añadir la fila completa a la tabla
  tbody.appendChild(row);
});
seasonAvg /= series.length;

const caption = document.createElement('caption');
caption.textContent = 'Season average: ' + seasonAvg;
if (table) {
  table.appendChild(caption);
}