/* ORLANDO 2027 · Base de datos offline
   Costos: a = adulto/niño 10+ (Disney y Universal cobran ADULTO desde los 10 años), c = niño 3-9 (null si no aplica) */
const META = {
  titulo: "Orlando 2027 · Familia 7",
  rango: "31 dic 2026 → 10 ene 2027 (11 ene = vuelo, sin actividad)",
  hotel: "Universal's Endless Summer Resort · Dockside Inn & Suites (7000 Universal Blvd) — Early Park Admission + shuttles GRATIS a Universal y SeaWorld · sin auto (Uber/Lyft para Disney)",
  clima: "Máx 21-23°C / Mín 8-12°C · Noches de NYE pueden bajar a 4-7°C. Llevar capas, guantes y cortaviento.",
  reglaOro: "Las niñas de 10 y 15 años pagan precio ADULTO en entradas y en el 95% de restaurantes Disney/Universal (niño = 3-9 años). Presupuesten como 7 adultos."
};

const PARQUES = {
  USF:"Universal Studios Florida", IoA:"Islands of Adventure", Epic:"Epic Universe",
  Volcano:"Volcano Bay", CityWalk:"Universal CityWalk",
  MK:"Magic Kingdom", EPCOT:"EPCOT", HS:"Hollywood Studios", AK:"Animal Kingdom",
  Springs:"Disney Springs", SeaWorld:"SeaWorld", Otros:"Fuera de parques"
};

const DIAS = [
{date:"2026-12-31",label:"Jue 31 dic",crowd:10,theme:"🎆 NOCHEVIEJA · Universal",parks:["IoA","USF","CityWalk"],
 hours:{MK:"8:00–1:00 AM",EPCOT:"9:00–1:00 AM",HS:"9:00–23:00",AK:"8:00–20:00",USF:"9:00–1:00 AM",IoA:"9:00–1:00 AM",Epic:"9:00–22:00 (verif.)"},
 events:["Grinchmas Who-liday y Hogsmeade con decoración navideña en IoA (temporada: ~hasta 3 ene)","Desfile Macy's Holiday Parade en USF (~17:30, globos, verificar en app)","USF e IoA abren hasta la 1:00 AM","Celebración GRATIS en CityWalk: música en vivo + confeti a medianoche"],
 warnings:["SIN ticket Disney hoy: el plan Disney arranca el 3 de ene y ahorra ~$1000 — los parques Disney saturan por capacidad todo el día y ya no es su problema","CityWalk se llena al máximo cerca de las 23:00: llegar temprano a la zona Promenade para conseguir lugar","La temporada navideña de Universal termina ~3 ene: Grinchmas y el desfile Macy's hay que verlos HOY","Verificar en la app Universal: horarios extendidos de NYE, qué parque tiene EPA y posibles cierres por capacidad de madrugada"],transport:"🏨→CityWalk/parques: shuttle GRATIS del hotel cada ~10-15 min (cero costo, cero surge de madrugada). Vuelta 00:15-01:00: confirmar el horario nocturno en concierge; si ya no corre, 1 Uber/Lyft XL ~$12-18 (vs ≈ $80-140 de dos Ubers con surge desde Disney).",weather:{hi:21,lo:13,hiF:70,loF:55,sr:"07:17",ss:"17:38",rain:"13:00-16:00 (pico 15:00)",mm:0.1,mmWet:0.5,prob:20},
 options:[
  {reco:true,title:"IoA + medianoche gratis en CityWalk",summary:"El parque navideño de Universal hasta la 1:00 AM y el conteo sin gastar un dólar extra.",
   steps:["Entrar ~10:30 (o con EPA, 30-45 min antes): Hagrid's y VelociCoaster con la mañana","13:00 almuerzo Three Broomsticks: sopas calientes + hot butterbeers","14:00-16:30 pico → Grinchmas Who-liday (teatro techado, sentado) + Frog Choir; rides solo si cola <40 min","17:30 Hogsmeade iluminado + re-ride de la favorita","18:30 cena: Mythos (OpenTable) o Three Broomsticks walk-up","23:15 caminar a CityWalk (2 min): música gratis en la Promenade y lugar para el conteo","00:00 confeti a medianoche · 00:15-01:00 re-ride final o shuttle al hotel"]},
  {title:"USF · desfile de los últimos días + Diagon Alley",parks:["USF","CityWalk"],summary:"La otra mitad de Harry Potter, Bourne y el desfile navideño con globos gigantes.",
vs:{aFavor:["Desfile Macy's ~17:30 con globos gigantes reales: único y con horas contadas (temporada ~hasta 3 ene)","Bourne Stuntacular y Horror Make-Up: shows techados con A/C para descansar del frío","Diagon Alley iluminada + Escape from Gringotts hasta el cierre de la 1:00 AM"],
 enContra:["Pierden la decoración navideña de Hogsmeade y Grinchmas: viven SOLO en IoA","Sin pase park-to-park (verificar) no pueden cruzar a IoA en la noche","IoA concentra los dos thrill estrella del viaje: Hagrid's y VelociCoaster"],
 cambiaSi:"Si su pase NO es park-to-park (confirmar en la app), o si el desfile de Macy's es prioridad familiar innegociable",
 baseReco:"IoA da la noche completa con la navidad que cierra temporada y CityWalk queda a un paso; USF los cubrirá el sábado 9 con el remix Universal"},
   steps:["15:00 entrada: Diagon Alley + Escape from Gringotts","Bourne Stuntacular + Horror Make-Up Show (teatro, calor)","~17:30 desfile Macy's desde el inicio de la ruta (Hollywood)","Noche: re-rides hasta la 1:00 AM → conteo en CityWalk"]}]},
{date:"2027-01-01",label:"Vie 1 ene",crowd:10,theme:"😴 Año Nuevo · día suave",parks:["Springs"],
 hours:{MK:"8:00–23:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["Outlets abren ~10-11 AM con liquidaciones de Año Nuevo","Disney Springs: música en vivo gratis todo el día","Posible Citrus Bowl (fútbol americano) en Camping World Stadium"],
 warnings:["Todos cansados de NYE: NO planear parque exigente","Los parques siguen en capacidad máxima"],transport:"🏨→Disney Springs: 2 Uber/Lyft (~$15-25 por vehículo por trayecto). Si prefieren outlets: Vineland ≈ $12-18 por vehículo. Brunch Keke's (I-Drive): ~$8, a 5 min del hotel.",weather:{hi:22,lo:12,hiF:72,loF:53,sr:"07:18",ss:"17:39",rain:"casi seco (chubasco aislado 14:00-15:00)",mm:0,mmWet:0.1,prob:20},
 ocupacion:{pct:80,rango:"72-88%",porQue:"Modelo sobre el histórico 2022-26 (no hay aforos reales de 2027): el viernes 1 ene los colegios siguen en vacaciones; Disney Springs satura desde mediodía con música en vivo y los parques Disney cierran por capacidad. La mañana (72%) es el único tramo fresco del día."},
 options:[
  {reco:true,title:"Dormir + Disney Springs",summary:"Mañana libre, brunch, caminar Disney Springs (gratis), cena con show.",
   steps:["Dormir hasta tarde","Brunch: Keke's o Hash House (I-Drive)","Tarde en Disney Springs: tiendas + música gratis en vivo","Cena: Raglan Road (show irlandés incluido) o The Polite Pig"]},
  {title:"Brunch + Outlets (primer día de liquidación)",parks:["Otros"],summary:"Las rebajas post-navidad arrancan fuerte el 1 de enero.",
vs:{aFavor:["1 de ene = pico de liquidaciones: markdowns sobre markdowns","Vineland concentra el Disney Character Warehouse, que se llena","Evitan el tráfico y la multitud de Disney Springs en su día más lleno"],
 enContra:["Pierden Disney Springs gratis con música en vivo y cena con show","Arrancan tarde tras la resaca de NYE y ya sin energía","Un día más de tiendas antes del outlet-day del 5 ene"],
 cambiaSi:"Si prefieren recuperar el día con parque suave y cena con show (Raglan Road) en vez de filas de outlet",
 baseReco:"Dormir la resaca de NYE + Disney Springs es gratis, caminable y sin reservas: el día 1 debe recuperar energía, no gastarla"},
   steps:["Salir 10:30 a Orlando Vineland Premium Outlets","3-4 horas de compras","Volver a descansar; cena ligera cerca del hotel"]}]},
{date:"2027-01-02",label:"Sáb 2 ene",crowd:9,theme:"🌌 Epic Universe",parks:["Epic"],
 hours:{MK:"9:00–23:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–22:00"},
 events:["El parque más nuevo de Universal (abierto 2025): Nintendo World, Dark Universe, How to Train Your Dragon, Ministerio de Magia"],
 warnings:["Tu pase SÍ incluye Epic Universe (confirmado): cero trámites — solo verificar pase park-to-park para Hogwarts Express","Sábado = muy lleno; llegar 45 min antes de apertura","EPA: Universal decide qué parque abre 1 h temprano cada día — verificar en la app la noche anterior. Ministry of Magic NO está en EPA"],transport:"🚌 Shuttle GRATIS del hotel a Epic Universe (~10 min): cero costo de transporte y cero estacionamiento.",weather:{hi:22,lo:12,hiF:72,loF:53,sr:"07:18",ss:"17:40",rain:"casi seco (chubasco aislado al mediodía)",mm:0,mmWet:0.2,prob:20},planB:"Si llueve: Battle at the Ministry y Le Cirque Arcanus son 100% bajo techo y las colas de Super Nintendo son techadas. Stardust Racers cierra con tormenta eléctrica: re-ride al final si escampa. Celestial Park es muy abierto y con frente frío pega el viento: capas.",
 ocupacion:{pct:90,rango:"85-95%",porQue:"Sábado del primer fin de semana completo de Año Nuevo: en el histórico 2022-26 los sábados de esta semana marcan 88-93% y Epic, como novedad, satura más que el promedio. Solo la hora de EPA mantiene el parque por debajo del 55%."},
 estrategias:{
  garantiza:{desc:"Un solo objetivo: GARANTIZAR las estrellas de Epic desde la hora más fría. Aceptas menos rides al día pero sales con Mario Kart, Monsters y Ministry asegurados.",pasos:[
   {h:"08:00-10:00",occ:50,items:["EPA/rope drop directo a Super Nintendo World: Mario Kart PRIMERO (después su cola no baja de 50 min)","Luego Monsters Unchained mientras el parque está al 45-55%"]},
   {h:"10:00-12:00",occ:70,items:["Battle at the Ministry YA: no está en EPA y su cola solo crece (60-90 min al mediodía)"]},
   {h:"12:00-16:00",occ:90,items:["Pico del día: shows Le Cirque Arcanus y The Untrainable Dragon + comida (Spit Fyre Grill) — los rides se enfrian"]},
   {h:"16:00-cierre",occ:94,items:["Re-ride de la estrella que quiso repetir + Celestial Park iluminado (Stardust Racers de noche)"]}]},
  cantidad:{desc:"Maximizar el RECUENTO de rides: atacas en la hora fría todo lo que da rides por minuto, absorbes el pico con indoor/shows y dejas las colas caras para la última hora.",pasos:[
   {h:"08:00-10:00",occ:50,items:["Lote frío: Yoshi's Adventure → Stardust Racers → Constellation Carousel (colas casi 0)","3-4 atracciones antes de las 10:00: rides/min al máximo"]},
   {h:"10:00-12:00",occ:70,items:["Isle of Berk y Dark Universe con colas aún manejables: sigues sumando mientras Ministry se infla"]},
   {h:"12:00-16:00",occ:90,items:["Pico → cero filas largas: shows (The Untrainable Dragon) y comida indoor; Ministry se salta activamente"]},
   {h:"16:00-cierre",occ:93,items:["Última hora: si Ministry cede por debajo de 60 min entra; si no, re-rides cortos — hoy manda el recuento"]}]}},
 options:[
  {reco:true,title:"Epic Universe día completo",summary:"Dedicar el día al parque nuevo mientras aún hay energía.",
   steps:["Si hay EPA en Epic: llegar 45 min antes y hacer Mario Kart + Monsters Unchained PRIMERO (Ministry of Magic no entra en EPA)","Battle at the Ministry a media jornada o al cierre (menos fila)","Shows teatro: Le Cirque Arcanus + The Untrainable Dragon (horario en app)","Almuerzo: Spit Fyre Grill (costillas, gran proteína/$)","Tarde: Isle of Berk + Dark Universe","Noche: Celestial Park iluminado + cena Das Stakehaus"]},
  {title:"SeaWorld + Christmas Celebration",parks:["SeaWorld"],summary:"Últimos días del evento navideño (termina ~3 ene, verificar). Mako, Pipeline y shows de orcas.",
vs:{aFavor:["Shuttle GRATIS del hotel a SeaWorld: $0 de transporte","Sábado menos caótico que el lado Universal (crowd 9 ese día)","Mako + Pipeline + orcas: acuáticas y shows en un solo parque","Christmas Celebration probablemente aún activo (termina ~3 ene)"],
 enContra:["Pierden el parque nuevo del viaje en su primer sábado","El pase ilimitado de Universal no rinde aquí","Si el evento navideño ya terminó, pierden los fuegos especiales"],
 cambiaSi:"Si Epic marca capacidad o entradas agotadas la noche anterior, o si el grupo prioriza acuáticas sobre novedad",
 baseReco:"Epic es la novedad del viaje y el sábado es para Universal con pase ilimitado; el shuttle gratis quita la excusa del transporte y SeaWorld queda como plan B sólido"},
   steps:["Transporte GRATIS: shuttle del hotel ↔ SeaWorld (~15-20 min, incluido para huéspedes)","Llegar a apertura","Mako + Pipeline + Penguin Trek temprano","Shows: Orca Encounter + Sea Lion High","Noche: fuegos del evento navideño si aún opera"]}]},

{date:"2027-01-03",label:"Dom 3 ene",crowd:8,theme:"🦁 Animal Kingdom · arranca Disney",parks:["AK","Springs"],
 hours:{MK:"9:00–22:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["PRIMER día del bloque Disney: 4 días desde el 3 de ene (≈ $1000 menos que arrancar el 31-dic)","Safari con mañana fría: los animales arrancan activos","AK cierra 19:00: noche tranquila antes del lunes de Magic Kingdom"],
 warnings:["Primer día SIN shuttle: el hotel no tiene bus a Disney = 2 Uber/Lyft por trayecto","Domingo con ocupación alta: rope drop a las 8:00 — Flight of Passage no baja de 60 min después de las 10:00","runDisney todavía NO corre (marathon weekend ~6-10 ene): sin cierres viales hoy","DinoLand U.S.A. cerró PERMANENTE en feb-2026 (hoy es obra de Tropical Americas: Indiana Jones + Encanto, abre ~2027): DINOSAUR y Restaurantosaurus ya no existen — AK tiene un headliner menos, todo se concentra en Pandora y África"],transport:"🏨→Animal Kingdom: 2 Uber/Lyft ≈ $18-26 por vehículo por trayecto. Si terminan en Disney Springs (opción reco): vuelta ≈ $15-22 por vehículo.",weather:{hi:22,lo:11,hiF:72,loF:52,sr:"07:18",ss:"17:40",rain:"06:00-08:00 y 19:00-22:00",mm:0.9,mmWet:1.1,prob:80},planB:"Lluvia probable de madrugada (80%): ir igual — el parque amanece vacío y el safari es MEJOR con llovizna (animales activos). Refugios techados: Flight of Passage, Na'vi River, Nemo, Lion King, Zootopia 4D. Si el aguacero no cede al mediodía: adelantar Disney Springs (casi todo techado).",
 ocupacion:{pct:78,rango:"70-86%",porQue:"Modelo sobre el histórico 2022-26 (no hay aforos de 2027): los domingos de la semana de Año Nuevo son el segundo pico de enero y AK sube 8-12 puntos sobre entre semana hasta 70-80% en fin de semana; con la mañana fría (8-11°C) Flight of Passage aguanta 45-60 min antes de las 10:00."},
 estrategias:{
  garantiza:{desc:"Garantiza Flight of Passage en la primera hora —es la cola que define el día— y usa la mañana fría para el safari.",pasos:[
   {h:"08:00-10:00",occ:50,items:["Rope drop Flight of Passage PRIMERO: desde las 10:00 su cola vive en 60-120 min"]},
   {h:"10:00-12:00",occ:70,items:["Kilimanjaro Safari con los animales activos por el frío: la cola sube después del mediodía"]},
   {h:"12:00-16:00",occ:86,items:["Pico → 12:00 Finding Nemo y 14:00 Festival of the Lion King (teatro con aire)"]},
   {h:"16:00-17:00",occ:91,items:["Expedition Everest (re-ride) y Na'vi River Journey en la última franja; salida ~16:30 hacia Disney Springs (AK cierra 19:00)"]}]},
  cantidad:{desc:"Máximo recuento: rides rápidos en la mañana fría, shows en el pico y Flight of Passage para la última hora — solo si cede por debajo de 40 min.",pasos:[
   {h:"08:00-10:00",occ:50,items:["Lote frío: Na'vi River Journey + Kali River Rapids (con el frío de enero casi sin cola)"]},
   {h:"10:00-12:00",occ:70,items:["Everest (re-ride) y sendero Maharajah Jungle Trek con colas moderadas: Flight of Passage se deja para el final"]},
   {h:"12:00-16:00",occ:86,items:["Pico → 12:00 Finding Nemo y 14:00 Festival of the Lion King + comida: cero filas largas"]},
   {h:"16:00-17:00",occ:91,items:["Última hora: Flight of Passage solo si cede por debajo de 40 min; si no, re-rides rápidos — hoy manda el recuento"]}]}},
 options:[
  {reco:true,title:"Animal Kingdom + noche Springs",summary:"Safari matinal + los dos mejores shows teatrales de Disney.",
   steps:["8:00 rope drop Flight of Passage","Safari Kilimanjaro (animales activos por el frío)","Expedition Everest + senderos de animales (DinoLand cerró en 2026: DINOSAUR ya no existe)","12:00 Finding Nemo The Big Blue (teatro)","14:00 Festival of the Lion King (teatro, el mejor show de Disney)","16:00 salir → ducha → Disney Springs","Cena Homecomin' o The Boathouse (reservar con días: domingo lleno) + música gratis"]},
  {title:"Volcano Bay (si el clima ayuda)",parks:["Volcano"],summary:"Parque acuático: en enero puede cerrar algunos días por frío o mantenimiento. Verificar el día anterior.",
vs:{aFavor:["Shuttle GRATIS al parque acuático","Rompimiento de rutina en un domingo","Krakatau y las playas del parque: descanso de pies distinto"],
 enContra:["Enero: puede cerrar por frío o mantenimiento (promedio 22°C, bajo el umbral de 24°C de la regla)","Pierden su ÚNICO día de Animal Kingdom: safari y Lion King","El plan recomendado ya incluye tarde en Disney Springs"],
 cambiaSi:"Solo si la app confirma apertura Y la máxima supera 24°C; con el promedio de 22°C lo normal es NO cambiar",
 baseReco:"AK con frío es cuando los animales están más activos y es su único día; Volcano Bay en enero es una lotería de mantenimiento"},
   steps:["Confirmar apertura en la app la noche anterior","Si abre: mañana de toboganes Krakatau","Tarde de descanso"]}]},
{date:"2027-01-04",label:"Lun 4 ene",crowd:7,theme:"✨ Magic Kingdom",parks:["MK"],
 hours:{MK:"9:00–22:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["Las multitudes empiezan a bajar (los colegios de EE.UU. vuelven esta semana)","Big Thunder Mountain renovada (reabrió may-2026 tras 16 meses cerrada): estreno reciente, algo más concurrida de lo normal"],
 warnings:["Comprar entrada MK con anticipación; considerar Lightning Lane Multi Pass (~$30-40 pp en fecha alta)","Sin auto: el Uber deja en la zona de rideshare del TTC; el cargo de estacionamiento ($30) NO aplica a rideshare","Frontierland/Liberty Square en obra mayor (Piston Peak · Cars + Villains land): Rivers of America y Tom Sawyer Island YA NO EXISTEN — el desfile y Tiana's Bayou operan normal, pero hay grúas y andamios"],transport:"🏨→Magic Kingdom: 2 Uber/Lyft hasta el TTC (~$20-30 por vehículo por trayecto) + ferry/monorail gratis. Ida y vuelta ≈ $80-120 los 2 vehículos.",weather:{hi:20,lo:12,hiF:68,loF:54,sr:"07:18",ss:"17:41",rain:"00:00-07:00 (madrugada)",mm:1.6,mmWet:2.6,prob:60},planB:"La lluvia es de madrugada y suele terminar antes de abrir. Si persiste: PhilharMagic, Hall of Presidents, Carousel of Progress, Laugh Floor, Buzz y Small World son indoor; las montañas siguen con lluvia leve. Happily Ever After solo se cancela con tormenta fuerte: plan B = cena larga en Liberty Tree + noche tranquila.",
 ocupacion:{pct:79,rango:"73-85%",porQue:"Lunes en que los colegios de EE.UU. empiezan a volver: caen 6-8 puntos sobre el fin de semana, pero la semana de Año Nuevo mantiene MK alto (histórico 2022-26: 72-82%). runDisney puede añadir tráfico cercano: verificar cierres viales."},
 estrategias:{
  garantiza:{desc:"Garantizar Seven Dwarfs —la atracción más sensible del parque— en la franja más fría del día; el resto va por disfrute, no por fila.",pasos:[
   {h:"08:00-10:00",occ:55,items:["Rope drop Seven Dwarfs Mine Train: 5-25 min contra 70+ al mediodía","Tron Lightcycle al seguir si la fila está corta"]},
   {h:"10:00-14:00",occ:78,items:["Fantasyland y Tomorrowland completos mientras el parque sube: It's a Small World, Big Thunder, Buzz"]},
   {h:"14:00-17:00",occ:90,items:["14:00 Festival of Fantasy desde Frontierland + teatro (PhilharMagic, Country Bear): el pico se absorbe sentado"]},
   {h:"17:00-cierre",occ:95,items:["Cena Liberty Tree (reserva) + Happily Ever After desde el Hub; re-ride de la estrella si cede cola"]}]},
  cantidad:{desc:"Máximo recuento: primera hora para acumular rides cortos, picos con shows y la estrella cara para la última hora, cuando su cola baja al cierre.",pasos:[
   {h:"08:00-10:00",occ:55,items:["Lote frío: Space Mountain, Buzz y Big Thunder — 4-5 rides antes de las 10:00"]},
   {h:"10:00-14:00",occ:78,items:["Haunted Mansion, It's a Small World y PhilharMagic: todo lo que esté por debajo de 40 min suma"]},
   {h:"14:00-17:00",occ:90,items:["14:00 desfile + teatro: mientras las colas tocan techo, el recuento sigue creciendo con cero espera"]},
   {h:"17:00-cierre",occ:95,items:["Última hora: Seven Dwarfs o Tron si bajan de 40 min + Happily Ever After desde el Hub"]}]}},
 options:[
  {reco:true,title:"Magic Kingdom día completo",summary:"El parque icónico: Tron, montañas, desfile y fuegos.",
   steps:["Rope drop: Seven Dwarfs o Tron","Mañana Fantasyland/Tomorrowland","~14:00 Festival of Fantasy (desfile) desde Frontierland","Tarde: teatro (PhilharMagic, Country Bear) para descansar","Cena Liberty Tree Tavern (reserva)","Noche: Happily Ever After"]},
  {title:"Día mixto AK + descanso",parks:["AK"],summary:"Animal Kingdom cierra temprano: ideal para medio día + tarde libre.",
vs:{aFavor:["AK cierra temprano: tarde REAL de piscina o compras","Safari y Lion King sin aguantar hasta la noche","Menos pasos que un Magic Kingdom completo"],
 enContra:["Pierden Festival of Fantasy y Happily Ever After","AK ya lo visitan el domingo 3: repetirlo hoy desordena el balance de los 12 días","No es descanso: sigue siendo día de parque pagado y dos Ubers"],
 cambiaSi:"Si llegan rendidos del fin de semana, o si cambian el 8 ene a Volcano Bay y quieren desfasar AK",
 baseReco:"El lunes sigue lleno (los colegios de EE.UU. vuelven esta semana): MK con desfile y fuegos es el día icónico; el descanso real está programado el martes 5"},
   steps:["Rope drop Flight of Passage","Safari + Expedition Everest","Festival of the Lion King (teatro imperdible)","Salir ~15:00, tarde de piscina/compras"]}]},
{date:"2027-01-05",label:"Mar 5 ene",crowd:6,theme:"🛍️ HARD DISCOUNT DAY",parks:[],
 hours:{MK:"9:00–21:00",EPCOT:"9:00–21:00",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["Liquidaciones post-navidad en su punto MÁXIMO (markdowns extra sobre clearance)","Martes = el día más vacío de los outlets"],
 warnings:["Descansar de parques HOY es la decisión inteligente: sacrificas un martes suave, no un fin de semana caro"],transport:"Vineland (mañana): 2 Uber/Lyft ≈ $12-18 por vehículo por trayecto. International Premium Outlets (tarde): a ~2 mi del hotel ≈ $7-10 por vehículo. Cafe Mineiro (I-Drive): corto ≈ $8.",weather:{hi:22,lo:12,hiF:72,loF:53,sr:"07:19",ss:"17:42",rain:"10:00-12:00",mm:2,mmWet:5,prob:40},
 ocupacion:{pct:65,rango:"58-72%",porQue:"Martes = el día más vacío del viaje en el histórico 2022-26: outlets en ~65% de afluencia y parques Disney en su punto más bajo (58-66%), con los markdowns post-navidad en pico. Es el valle de ocupación de la semana: por eso hoy toca descanso y compras."},
 options:[
  {reco:true,title:"Outlets full day (ver pestaña Compras)",summary:"Vineland por la mañana (cerca de Disney), International Drive por la tarde.",
   steps:["9:30 Orlando Vineland Premium Outlets (Disney Character Warehouse PRIMERO, se llena)","13:00 almuerzo: Bolay o Chipotle (proteína barata)","15:00 Orlando International Premium Outlets (I-Drive)","19:00 cena: Cafe Mineiro (rodizio brasileño, mejor proteína/$ de Orlando)","Día de descanso físico perfecto a mitad del viaje"]},
  {title:"EPCOT suave + compras tarde",parks:["EPCOT"],summary:"Si prefieren parque: EPCOT es el más relajado para caminar y comer.",
vs:{aFavor:["Aprovechan parque en el martes más vacío del viaje","World Showcase relajado + cena Regal Eagle (proteína a buen precio)","Evitan la segunda tanda de traslados de outlets"],
 enContra:["Pierden el martes = outlet más vacío y pico de markdowns del viaje","El Character Warehouse se llena rápido: hoy es el día óptimo","Más Uber de los previstos para dos bloques de compras"],
 cambiaSi:"Si el 1 de ene ya cubrieron todo el clearance, o si el mal tiempo empuja a parque",
 baseReco:"Martes = outlet vacío + pico de liquidaciones + mitad exacta del viaje para descansar pies: hoy el hard discount vale más que un parque"},
   steps:["Mañana tranquila","EPCOT 12:00-20:00: paseo de World Showcase","Cena Regal Eagle Smokehouse"]}]},
{date:"2027-01-06",label:"Mié 6 ene",crowd:5,theme:"🎬 Hollywood Studios",parks:["HS"],
 hours:{MK:"9:00–21:00",EPCOT:"9:00–21:00",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["runDisney Marathon Weekend suele arrancar ~esta fecha (verificar): expo en ESPN Wide World of Sports","ÚLTIMO día del overlay navideño de Rock 'n' Roller Coaster Starring The Muppets (vigente 4-nov → 6-ene)"],
 warnings:["HS tiene los mejores shows de teatro: planear el día ALREDEDOR de los horarios de shows","MuppetVision cerró (jun-2025) y la zona Monsters Inc. está en obra: esperar andamios al final de Sunset Blvd"],transport:"🏨→Hollywood Studios: 2 Uber/Lyft a la zona de rideshare del parque (~$20-30 por vehículo por trayecto, sin cargo de estacionamiento).",weather:{hi:23,lo:13,hiF:73,loF:56,sr:"07:19",ss:"17:43",rain:"09:00-14:00",mm:3.2,mmWet:7.9,prob:40},planB:"La lluvia típica (9-14 h) cae justo en la franja de teatros del plan (Frozen, Indiana Jones, Beauty & Beast): cero cambios. Rise, Star Tours y Toy Story Mania son indoor. Si hay tormenta a la noche, Fantasmic! puede cancelarse: plan B = cena 50's Prime Time + salida temprana.",
 ocupacion:{pct:62,rango:"55-70%",porQue:"Miércoles de rutina post-festiva con los colegios de vuelta: histórico 2022-26 de 58-66% en Disney. runDisney Marathon Weekend suele arrancar esta semana (expo en ESPN Wide World): verificar, podría sumar 3-5 puntos."},
 estrategias:{
  garantiza:{desc:"Garantiza Rise of the Resistance —la cola más volatile del parque— en la primera hora y construye el día alrededor de los shows de teatro.",pasos:[
   {h:"08:00-10:00",occ:52,items:["Rope drop Rise of the Resistance PRIMERO (después rara vez baja de 75 min)","Slinky Dog enseguida: Toy Story Land se infla antes que Galaxy's Edge"]},
   {h:"10:00-12:00",occ:70,items:["Smugglers Run y Star Tours con colas todavía moderadas"]},
   {h:"12:00-16:00",occ:86,items:["Bloque de shows: 11:30 Frozen, 13:00 Indiana Jones, 15:00 Beauty and the Beast — descanso sentado en el pico"]},
   {h:"16:00-cierre",occ:93,items:["Re-ride de la estrella, cena temprana y Fantasmic! (llegar 45 min antes)"]}]},
  cantidad:{desc:"Máximo recuento: rides cortos de Toy Story Land en la hora fría, single rider donde aplica y el pico entero metido en shows. Cero colas de 60 min.",pasos:[
   {h:"08:00-10:00",occ:52,items:["Lote frío de Toy Story Land: Slinky Dog, Toy Story Mania, Alien Swirling — 3-4 rides en la primera hora"]},
   {h:"10:00-12:00",occ:70,items:["Smugglers Run por single rider + Star Tours: recuento alto mientras Rise se infla"]},
   {h:"12:00-16:00",occ:86,items:["Pico → 11:30 Frozen / 13:00 Indiana Jones / 15:00 Beauty: el recuento crece con asiento y aire acondicionado"]},
   {h:"16:00-cierre",occ:93,items:["Última hora: Tower of Terror y re-rides rápidos; Rise solo si cede por debajo de 45 min"]}]}},
 options:[
  {reco:true,title:"Hollywood Studios",summary:"Star Wars + Toy Story + la mayor densidad de teatro en vivo.",
   steps:["Rope drop Rise of the Resistance o Slinky Dog","Galaxy's Edge + Smugglers Run","Rock 'n' Roller Coaster Muppets (último día del overlay navideño)","11:30 Frozen Sing-Along (teatro, descanso)","13:00 Indiana Jones Stunt Spectacular","15:00 Beauty and the Beast Live","Cena Sci-Fi Dine-In (autos-cine) o 50's Prime Time","Noche: Fantasmic! (llegar 45 min antes)"]},
  {title:"Día Universal libre",parks:["USF","IoA","CityWalk"],summary:"Repetir favoritas en USF/IoA sin presión + CityWalk de noche.",
vs:{aFavor:["Con pase ilimitado entran y salen sin presión de horarios","Mini golf y cena en CityWalk: noche sin estrés","Escapan del hacinamiento de HS un miércoles"],
 enContra:["Pierden los 5 shows de HS (Frozen, Indiana Jones, Beauty y Beast) y Fantasmic!","HS es el único día de teatro en vivo y solo lo visitan una vez","Repetir parque cuesta el mejor día de descanso activo del viaje"],
 cambiaSi:"Si Fantasmic! o algún show están cancelados ese día, o si el cuerpo pide mini golf y noche corta",
 baseReco:"HS es el parque con más shows en vivo y el único con Fantasmic!: el miércoles está diseñado para descansar caminando"},
   steps:["Mañana: re-ride de favoritas","Tarde: mini golf Hollywood Drive-In en CityWalk (~$18 pp)","Cena Bigfire o Antojitos"]}]},
{date:"2027-01-07",label:"Jue 7 ene",crowd:5,theme:"🌍 EPCOT profundo",parks:["EPCOT"],
 hours:{MK:"9:00–21:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["runDisney 10K suele ser ~esta fecha (madrugada, cierres viales cerca de EPCOT temprano)"],
 warnings:["Sin festival en EPCOT (Festival of the Arts empieza el 15 ene, confirmado): los booths de comida de festival NO estarán. La comida será de restaurantes normales."],transport:"🏨→EPCOT: 2 Uber/Lyft ≈ $18-25 por vehículo por trayecto. Opción Kennedy Space Center SIN auto es caro: 2 Uber ≈ $65-85 por vehículo por trayecto (≈ $260-340 ida+vuelta) — solo si el presupuesto lo aprueba.",weather:{hi:20,lo:10,hiF:68,loF:50,sr:"07:19",ss:"17:43",rain:"09:00-10:00 (y madrugada leve)",mm:0.4,mmWet:0.7,prob:60},planB:"EPCOT es el parque más cubierto de Disney: Land, Seas, México, Noruega (Frozen) y EEUU permiten cruzar medio parque sin mojarse; Guardians, Test Track y Soarin' son indoor. Luminous aguanta llovizna; con tormenta, plan B = cena Biergarten (buffet + show incluido).",
 ocupacion:{pct:63,rango:"56-70%",porQue:"Jueves con menor presión escolar: EPCOT es históricamente el parque más relajado de los cuatro (55-65%) y sin festival (Festival of the Arts empieza el 15 ene) la ocupación cae 4-6 puntos más al no haber booths. El mejor día de comida del viaje."},
 estrategias:{
  garantiza:{desc:"Garantiza Guardians —el mejor ride del parque— con rope drop/cola virtual y ordena el resto del día por cola creciente.",pasos:[
   {h:"08:00-10:00",occ:55,items:["Rope drop Guardians of the Cosmic Rewind (o cola virtual temprana): su suerte se juega en la primera hora"]},
   {h:"10:00-12:00",occ:72,items:["Test Track y Soarin' mientras estén por debajo de 45 min"]},
   {h:"12:00-16:00",occ:87,items:["Pico → almuerzo Regal Eagle + Voices of Liberty y mariachis (shows gratis, techado)"]},
   {h:"16:00-cierre",occ:94,items:["Tarde de países sin prisa, cena y 21:00 Luminous desde la laguna (guardar lugar ~18:30)"]}]},
  cantidad:{desc:"Máximo recuento: Future World temprano (colas ~0), apertura de World Showcase para Remy/Frozen con cola corta y el pico entero en shows y comida.",pasos:[
   {h:"08:00-10:00",occ:55,items:["Lote frío de Future World: Spaceship Earth, Living with the Land, Mission SPACE — colas casi nulas"]},
   {h:"10:00-12:00",occ:72,items:["Guardians por cola virtual + apertura de World Showcase (suele ser ~11:00, verificar): Remy y Frozen en su franja corta"]},
   {h:"12:00-16:00",occ:87,items:["Pico → comida y Turtle Talk/Voices of Liberty: evitas Guardians y Remy en 60+ min"]},
   {h:"16:00-cierre",occ:94,items:["Última hora: re-ride de lo que gustó (los países vacían al atardecer) + 21:00 Luminous"]}]}},
 options:[
  {reco:true,title:"EPCOT día completo",summary:"El parque favorito para comer bien y caminar sin prisa.",
   steps:["Rope drop Guardians: Cosmic Rewind (o virtual queue en app)","Test Track + Soarin'","Almuerzo: Regal Eagle Smokehouse (BBQ, gran proteína/$)","Tarde World Showcase: Voices of Liberty, mariachis, tambores taiko","Cena: Via Napoli (platos familiares) o Biergarten (buffet + show)","21:00 Luminous (fuegos del lago)"]},
  {title:"Kennedy Space Center",parks:["Otros"],summary:"Día completo fuera de parques (1 h en auto). Cohetes reales, Atlantis: experiencia única para las 3 niñas.",
vs:{aFavor:["Experiencia única del viaje: Saturn V, Atlantis y bus tour de cohetería","Educación real para las 3 niñas, algo distinto a atracciones","Día fuera de parques aprovechando un jueves de crowd 5"],
 enContra:["COSTO sin auto: 2 Ubers ida y vuelta ≈ $260-340 (vs $40-60 a EPCOT)","~6 horas de puerta a puerta: salen temprano y vuelven al anochecer","Pierden Guardians, Test Track y Luminous en el mejor EPCOT del viaje"],
 cambiaSi:"Solo si el presupuesto aprueba ~$300 extra de transporte Y las niñas piden algo explícitamente fuera de parque",
 baseReco:"EPCOT el jueves (crowd 5) cuesta $40-60 de Uber y es el mejor día de caminar y comer; KSC es brillante pero su transporte sin auto lo hace 3-4 veces más caro"},
   steps:["Salir 8:30","9:30-16:30 KSC: bus tour al Apollo/Saturn V, Atlantis, IMAX","Volver y cenar ligero"]}]},
{date:"2027-01-08",label:"Vie 8 ene",crowd:6,theme:"⚡ Islands of Adventure",parks:["IoA"],
 hours:{MK:"9:00–22:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["Estreno de IoA en el viaje: Hagrid's y VelociCoaster con EPA a favor","runDisney medio maratón ~esta fecha (madrugada): cierres viales, irrelevante con shuttle Universal","Temporada navideña YA cerró: sin Grinchmas ni desfile Macy's (se vieron el 31-dic)"],
 warnings:["Primer día de IoA: si algo no alcanza, el remix del sábado 9 absorbe los pendientes","EPA: Universal decide qué parque abre 1 h temprano — verificar en la app la noche anterior","Viernes con ocupación al alza: Hagrid's y VelociCoaster tocan 60-90 min al mediodía; single rider divide al grupo"],transport:"🚌 Shuttle GRATIS del hotel a CityWalk/IoA (~10 min): cero costo. Para EPA: primera salida del bus en concierge (~45-60 min antes de abrir); si no alcanza, Uber corto ~$8-12.",weather:{hi:22,lo:10,hiF:72,loF:50,sr:"07:19",ss:"17:44",rain:"14:00-18:00",mm:0.1,mmWet:0.7,prob:20},planB:"Lluvia típica 14-18 h: adelantar Hagrid's/VelociCoaster a la mañana (como marca la estrategia) y meter Spider-Man, Forbidden Journey y Kong (indoor) en la tarde. Con tormenta eléctrica cierran Hulk/VelociCoaster: refugio en Three Broomsticks o Mythos. Rides acuáticos con frío + lluvia = hoy no.",
 ocupacion:{pct:76,rango:"68-84%",porQue:"Modelo sobre el histórico 2022-26: los viernes de enero marcan 70-78% en Universal (7 puntos sobre el jueves) y con la temporada navideña ya cerrada no hay empuje extra; con EPA la primera hora arranca en 45-55% y el pico 16:00-19:00 toca 80-85% en Hogsmeade."},
 estrategias:{
  garantiza:{desc:"Con EPA el viernes se decide en la primera hora: garantizas Hagrid's y VelociCoaster cuando el parque está al 45% y el resto del día fluye sin prisas de fila.",pasos:[
   {h:"08:00-10:00",occ:45,items:["EPA: Hagrid's PRIMERO con la hora de ventaja (después rara vez baja de 60 min)","Luego rope drop VelociCoaster mientras esté por debajo de 40 min"]},
   {h:"10:00-12:00",occ:68,items:["Forbidden Journey y Spider-Man (indoor): aseguras tus estrellas restantes con cola corta"]},
   {h:"12:00-16:00",occ:89,items:["Pico → almuerzo Three Broomsticks (interior, asientos = descanso) mientras Hulk está en 70+ min"]},
   {h:"16:00-cierre",occ:93,items:["Re-ride de la estrella favorita + Hogsmeade de noche antes de cerrar"]}]},
  cantidad:{desc:"Si el objetivo es cantidad, la regla es clara: solo rides con cola corta. Una cola de 60+ min se salta aunque sea estrella; hoy el recuento manda.",pasos:[
   {h:"08:00-10:00",occ:45,items:["Lote frío: VelociCoaster (single rider si se divide el grupo) + Hulk: 2 thrill en la primera hora"]},
   {h:"10:00-12:00",occ:68,items:["Spider-Man, Kong y Jurassic: indoor y temáticos acumulando recuento mientras Hagrid's se infla"]},
   {h:"12:00-16:00",occ:89,items:["Pico → comida indoor y Seuss Landing: evitas activamente Hagrid's y VelociCoaster en su pico (80-120 min)"]},
   {h:"16:00-cierre",occ:93,items:["Última hora: Hagrid's solo si cede por debajo de 45 min; si no, re-rides rápidos de Spider-Man/Hulk"]}]}},
 options:[
  {reco:true,title:"Islands of Adventure",summary:"El mejor parque para las edades 10-15: VelociCoaster, Hagrid's, Hulk.",
   steps:["EPA (si aplica a IoA): Hagrid's PRIMERO con una hora de ventaja","Rope drop VelociCoaster o Forbidden Journey","Almuerzo: Three Broomsticks (Great Feast para compartir)","Tarde: Spider-Man, Kong, Jurassic","De noche: Hogsmeade iluminado + Frog Choir","Cena: Mythos (reserva OpenTable) o Thunder Falls Terrace"]},
  {title:"USF · Diagon Alley + Bourne Stuntacular",parks:["USF","CityWalk"],summary:"La otra mitad de Harry Potter y los mejores shows techados de Universal.",
vs:{aFavor:["Bourne Stuntacular y Horror Make-Up: shows con A/C para descansar del frío","Diagon Alley de noche + Escape from Gringotts: el lado Potter que aún no han visto","Single rider en Mummy y Rip Ride Rockit: recuento alto si la fila lo permite"],
 enContra:["Pierden el parque mejor calibrado para sus edades: IoA concentra Hagrid's, VelociCoaster y Hulk","Hogsmeade y Hogwarts Express viven al otro lado: sin pase park-to-park no cruzan","IoA en viernes-6 sigue siendo manejable: mejor estrenarlo hoy que en el sábado 9"],
 cambiaSi:"Si IoA marca cierres por capacidad ese día, o si su pase NO es park-to-park y prefieren dedicar el día completo a USF",
 baseReco:"IoA es el parque con más thrill por edad (Hagrid's, VelociCoaster, Hulk) y el viernes-6 está por debajo de cualquier sábado; USF aparece igual en el remix del 9"},
   steps:["Mañana: Diagon Alley + Escape from Gringotts","Bourne Stuntacular + Horror Make-Up Show (teatro)","Tarde: Villain-Con, Mummy y Rip Ride","Noche en CityWalk"]}]},
{date:"2027-01-09",label:"Sáb 9 ene",crowd:7,theme:"🔄 Repetir favoritos",parks:["USF","IoA"],
 hours:{MK:"9:00–22:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–22:00",IoA:"9:00–22:00",Epic:"9:00–21:00"},
 events:["runDisney Maratón suele ser ~este fin de semana (madrugada, cierres viales)","Old Town Kissimmee: desfile de autos clásicos (sábados ~16:00, GRATIS)"],
 warnings:["Sábado = parques Disney llenos otra vez; Universal más manejable con tu pase ilimitado"],transport:"Mañana Universal: shuttle GRATIS (cero costo). Opción Old Town Kissimmee: 2 Uber/Lyft ≈ $14-20 por vehículo por trayecto. Opción Gatorland/airboat: ≈ $18-25 por vehículo por trayecto.",weather:{hi:23,lo:13,hiF:73,loF:55,sr:"07:19",ss:"17:45",rain:"19:00-23:00 (noche)",mm:3.7,mmWet:9.2,prob:40},planB:"La lluvia típica es nocturna (19-23 h): hacer Old Town solo si el radar está limpio; si no, cambiarlo por CityWalk techado (cine + cena). Refugios Universal: Bourne Stuntacular, Horror Make-Up, Mummy y Transformers (todo indoor).",
 ocupacion:{pct:84,rango:"78-90%",porQue:"Sábado de repetir favoritos: histórico 2022-26 de 78-88% en Universal (más manejable que los Disney llenos con tu pase ilimitado). runDisney puede cerrar vías de madrugada y Old Town por la tarde queda al 55-65% de afluencia (gratis)."},
 estrategias:{
  garantiza:{desc:"Repetir no es bajar el nivel: con pase ilimitado garantizas tu estrella pendiente en la primera hora (con EPA) y el resto del día va sin presión de fila.",pasos:[
   {h:"08:00-10:00",occ:55,items:["EPA (verificar qué parque abre temprano en la app): tu estrella pendiente — Hagrid's o VelociCoaster — garantizada antes que nadie"]},
   {h:"10:00-13:00",occ:80,items:["Segunda estrella + Diagon Alley completo: Escape from Gringotts sin correr"]},
   {h:"13:00-15:00",occ:89,items:["Pico → Bourne Stuntacular y Horror Make-Up (teatro) + comida: descanso real sin colas"]},
   {h:"15:00-16:00",occ:92,items:["Re-ride final de la favorita → 16:00 salida a Old Town Kissimmee (car cruise gratis)"]}]},
  cantidad:{desc:"Máximo recuento con el pase: lote de rides en la primera hora, single rider donde aplica, picos con shows y toda cola de 60+ min se salta.",pasos:[
   {h:"08:00-10:00",occ:55,items:["EPA lote frío: Escape from Gringotts + Revenge of the Mummy (USF) o Hulk/Spider-Man (IoA) según el parque con EPA"]},
   {h:"10:00-13:00",occ:80,items:["Kong, Jurassic y Seuss Landing: todo lo que esté por debajo de 40 min suma al recuento"]},
   {h:"13:00-15:00",occ:89,items:["Pico → shows de teatro y comida: evitas activamente Hagrid's y VelociCoaster en su pico"]},
   {h:"15:00-16:00",occ:92,items:["Última vuelta: re-ride rápido de la mejor → 16:00 Old Town (gratis) o CityWalk de noche"]}]}},
 options:[
  {reco:true,title:"Universal remix + Old Town",summary:"Repetir lo mejor de Universal sin prisa + noche americana gratis.",
   steps:["Mañana: favoritas de USF/IoA (con pase ilimitado, entrar tarde sin culpa)","Descanso de tarde en el hotel","16:00 Old Town Kissimmee: car cruise + rueda de la fortuna + tiendas (gratis)","Cena en Old Town o regreso a CityWalk"]},
  {title:"Gatorland o airboat + outlets",parks:["Otros"],summary:"Mañana de naturaleza Florida (caimanes) + tarde de últimas compras.",
vs:{aFavor:["Naturaleza Florida real: caimanes y airboats","Último día para outlets con calma","Escapan de los parques llenos del sábado"],
 enContra:["~$35 pp × 7 ≈ $245 de entradas frente a $0 con el pase ilimitado","Pierden re-rides gratis de sus favoritas el penúltimo día","Madrugada extra tras la semana más larga del viaje"],
 cambiaSi:"Si ya repitieron todo Universal, o si el safari de caimanes es sueño declarado de las niñas",
 baseReco:"Con pase ilimitado repetir favoritas cuesta $0; el sábado en Universal es manejable y Old Town de noche es gratis"},
   steps:["9:00 Gatorland (~$35 pp) o Boggy Creek Airboat (~$35 pp)","Tarde: outlets por lo que faltó comprar","Cena temprano (mañana es el último día)"]}]},
{date:"2027-01-10",label:"Dom 10 ene",crowd:6,theme:"🎢 Último día · gran cierre",parks:["Epic","IoA","USF"],
 hours:{MK:"9:00–21:00",EPCOT:"9:00–21:30",HS:"9:00–21:00",AK:"8:00–19:00",USF:"9:00–21:00",IoA:"9:00–21:00",Epic:"9:00–21:00"},
 events:["Último día completo del viaje","runDisney Maratón puede ser hoy (verificar): madrugada con cierres viales cerca de Disney"],
 warnings:["Dejar maletas casi listas esta noche: el vuelo es mañana 11 ene","No planear noche muy tarde","Votación DISNEY = comprar un 5° día de entrada (~$144-209 pp ≈ $1000-1460 los 7): solo con el presupuesto aprobado"],transport:"Según el parque votado: shuttle GRATIS si es Universal · 2 Uber/Lyft si es Disney (≈ $40-60 ida y ≈ $40-60 vuelta los dos vehículos).",weather:{hi:22,lo:11,hiF:72,loF:52,sr:"07:19",ss:"17:45",rain:"12:00-22:00 (tarde)",mm:0.8,mmWet:1.9,prob:40},planB:"Lluvia de tarde: hacer los re-rides en la mañana. Refugios según el parque votado — Universal: Bourne/Horror Make-Up · Epic: Ministry · Disney: teatros. Si el maratón runDisney es hoy: entrar después de las 10 AM evita los cierres viales. Cena de despedida techada sí o sí.",
 ocupacion:{pct:76,rango:"68-84%",porQue:"Domingo de cierre: histórico 2022-26 de 70-82% (el lunes la ocupación cae 12-15 puntos, por eso la votación es hoy). Si runDisney maratón cae este fin de semana: cierres viales de madrugada, verificar en la app."},
 estrategias:{
  garantiza:{desc:"Gane quien gane la votación, la mañana se dedica a GARANTIZAR tu pendiente personal —la estrella que no hiciste o quieres repetir— y el resto va suave.",pasos:[
   {h:"08:00-10:00",occ:52,items:["EPA/rope drop de TU pendiente: la atracción estrella del parque votado, primero y sin cola","Si la primera fue por debajo de 30 min, encadena la segunda estrella"]},
   {h:"10:00-13:00",occ:78,items:["Re-rides de tus 2-3 favoritas y fotos finales sin prisa"]},
   {h:"13:00-17:00",occ:88,items:["Pico → comida temprana y shows indoor: nadie se queda en fila larga el último día"]},
   {h:"17:00-cierre",occ:93,items:["Cena especial de despedida (California Grill o Mythos, reservar) + re-ride final si hay cola corta; 20:30 al hotel a empacar"]}]},
  cantidad:{desc:"El último día se maximiza el recuento: lote de rides por zonas en la mañana fría, picos con shows y una última ronda de re-rides antes de empacar.",pasos:[
   {h:"08:00-10:00",occ:52,items:["Zona por zona empezando por la de menor cola: 3-4 rides cortos para encabezar el recuento"]},
   {h:"10:00-13:00",occ:78,items:["Siguiente zona: todo lo que esté por debajo de 40 min entra; lo que pase de 60 min se salta"]},
   {h:"13:00-17:00",occ:88,items:["Pico → shows y comida: el recuento no justifica 60 min de fila"]},
   {h:"17:00-cierre",occ:93,items:["Cena de cierre + última ronda de re-rides rápidos; 20:30 al hotel a empacar"]}]}},
 options:[
  {reco:true,title:"El parque favorito de la familia (votación)",summary:"Votar el parque que más amaron. IMPORTANTE: la votación es Universal (Epic/IoA/USF) — el bloque Disney de 4 días ya se completó (3 al 7 ene).",
   steps:["Votación familiar la noche anterior (si votan un parque Disney: añadir un 5° día ≈ $144-209 pp ≈ $1000-1460 los 7)","Medio día de re-rides y fotos finales","Última cena especial: California Grill (vista a fuegos) o Mythos","20:30 regreso al hotel a empacar"]},
  {title:"Epic Universe segunda vuelta",parks:["Epic"],summary:"Si no alcanzó el día 2: el parque nuevo merece dos días.",
vs:{aFavor:["Rescatan Battle at the Ministry si el 2 ene no alcanzó","Cierre del viaje con Celestial Park iluminado","Segunda vuelta con menos cola a media jornada"],
 enContra:["Pierden la VOTACIÓN familiar: cada uno repite su parque favorito","Si el 2 ene fue completo, Epic será repetir en vez de descubrir","Se van sin la cena especial de despedida del viaje"],
 cambiaSi:"Si el 2 ene se quedaron con pendientes concretos (Ministry, un show, una cena)",
 baseReco:"El último día lo decide la familia: repetir el parque que amaron vale más que cualquier plan optimizado"},
   steps:["Rope drop la atracción que quedó pendiente","Souvenirs Harry Potter/Nintendo","Cena Toadstool Cafe y cierre en Celestial Park iluminado"]}]},
{date:"2027-01-11",label:"Lun 11 ene",crowd:3,theme:"✈️ VUELO · sin actividad",parks:[],
 hours:{},events:["Vuelo de regreso — día bloqueado por decisión familiar"],
 warnings:["Salir al aeropuerto MCO con 3 h de anticipación (lunes de alta demanda post-vacaciones)","El hotel NO tiene shuttle al MCO: 2 Uber/Lyft (≈ $25-35 por vehículo) o Mears Connect reservado (~$16 adulto / $13 niño pp, verificar)"],transport:"MCO: recoger el hotel 3-3,5 h antes del vuelo. Mears Connect se reserva con ~1 semana; Uber/Lyft se pide en el lobby con maletas listas.",weather:{hi:20,lo:10,hiF:68,loF:50,sr:"07:19",ss:"17:46",rain:"15:00-19:00 (y 06:00)",mm:1.5,mmWet:2.6,prob:60},
 ocupacion:{pct:60,rango:"50-72%",porQue:"Salida: el pico histórico de MCO es 10:00-14:00 en lunes post-vacaciones (seguridad y vuelos domésticos al 80%+). Con recoger el hotel 3-3,5 h antes del vuelo evitan justo ese pico; la primera hora de la mañana está en el 50-60%."},
 options:[{reco:true,title:"Solo logística",summary:"Desayuno, check-out, aeropuerto.",steps:["Desayuno tranquilo","Check-out 10:00-11:00","Transporte al MCO: 2 Uber/Lyft o Mears Connect (reservar con ~1 semana)","MCO con 3 h de margen"]}]}
];



/* ACTIVIDADES · minAge = edad recomendada mínima · restr = restricción explícita (estatura/edad) */
const ACTIVIDADES = [
{id:"u1",name:"Harry Potter: Escape from Gringotts",park:"USF",cat:["Simulador","Ride familiar"],desc:"Montaña rusa oscura en el banco de Gringotts, dentro de Diagon Alley.",minAge:8,restr:"42\" (107 cm)",thrill:3,dur:5,a:0,c:null,note:"Incluida en tu pase",tips:"Rope drop o última hora. La fila temática es parte de la experiencia.",best:"Mañana temprano"},
{id:"u2",name:"Revenge of the Mummy",park:"USF",cat:["Montaña rusa"],desc:"Coaster indoor con efectos de fuego y oscuridad total.",minAge:9,restr:"48\" (122 cm)",thrill:4,dur:4,a:0,c:null,note:"Incluida",tips:"Las niñas de 10 la aman o la odian: ver primero un video.",best:"Mediodía"},
{id:"u3",name:"Hollywood Rip Ride Rockit",park:"USF",cat:["Montaña rusa"],desc:"Coaster vertical de 90° donde eliges tu música.",minAge:12,restr:"51\" (130 cm)",thrill:5,dur:3,a:0,c:null,note:"Incluida",tips:"Cierre permanente anunciado hacia 2026-27: confirmar si aún opera.",best:"Verificar"},
{id:"u4",name:"Villain-Con Minion Blast",park:"USF",cat:["Ride familiar"],desc:"Galería de tiro interactiva en movimiento, en Minion Land.",minAge:5,restr:null,thrill:1,dur:5,a:0,c:null,note:"Incluida",tips:"Ideal para descansar: sin fila larga casi nunca.",best:"Tarde"},
{id:"u5",name:"Despicable Me Minion Mayhem",park:"USF",cat:["Simulador"],desc:"Simulador familiar de los Minions.",minAge:5,restr:"40\" (102 cm)",thrill:2,dur:6,a:0,c:null,note:"Incluida",tips:"Hay asientos fijos para quien se maree.",best:"Mañana"},
{id:"u6",name:"Transformers: The Ride 3D",park:"USF",cat:["Simulador"],desc:"Simulador 3D de acción estilo Spider-Man.",minAge:7,restr:"40\" (102 cm)",thrill:3,dur:5,a:0,c:null,note:"Incluida",tips:"Similar a Spider-Man; hacer uno de los dos si hay poco tiempo.",best:"Tarde"},
{id:"u7",name:"The Bourne Stuntacular",park:"USF",cat:["Show teatro"],desc:"Show de acrobacias en vivo con pantalla gigante móvil. El mejor show de acción de Orlando.",minAge:7,restr:null,thrill:3,dur:25,a:0,c:null,note:"Incluido",tips:"TEATRO CLIMATIZADO = descanso perfecto. Llegar 20 min antes.",best:"Hora pico"},
{id:"u8",name:"Horror Make-Up Show",park:"USF",cat:["Show teatro"],desc:"Comedia en vivo sobre efectos de maquillaje de terror. Muy gracioso.",minAge:10,restr:null,thrill:2,dur:25,a:0,c:null,note:"Incluido",tips:"Humor un poco subido de tono: apto para las 3 niñas.",best:"Tarde"},
{id:"u9",name:"E.T. Adventure",park:"USF",cat:["Ride familiar"],desc:"Clásico ride oscuro volando en bicicleta.",minAge:4,restr:"34\" (86 cm)",thrill:1,dur:5,a:0,c:null,note:"Incluida",tips:"Nostalgia pura para los adultos.",best:"Cualquiera"},
{id:"u10",name:"Desfile Macy's Holiday Parade",park:"USF",cat:["Desfile","Show calle"],desc:"Globos gigantes reales del desfile de Macy's NY + Santa. Solo temporada navideña (~hasta 3 ene, verificar).",minAge:3,restr:null,thrill:1,dur:30,a:0,c:null,note:"Incluido · estacional",tips:"Ver desde el inicio de la ruta (Hollywood) para terminar antes.",best:"~17:30 (verif. app)"},
{id:"u11",name:"Hagrid's Magical Creatures Motorbike",park:"IoA",cat:["Montaña rusa"],desc:"La mejor coaster de Universal: moto o sidecar por el Bosque Prohibido.",minAge:9,restr:"48\" (122 cm)",thrill:4,dur:4,a:0,c:null,note:"Incluida",tips:"La fila más larga del parque: rope drop o single rider (divide al grupo).",best:"Apertura"},
{id:"u12",name:"Jurassic World VelociCoaster",park:"IoA",cat:["Montaña rusa"],desc:"La coaster más intensa de Florida: 2 lanzamientos y barril sobre la laguna.",minAge:12,restr:"51\" (130 cm)",thrill:5,dur:3,a:0,c:null,note:"Incluida",tips:"La sobrina de 15 la adorará; las de 10 miden ~137 cm y podrían, pero es MUY intensa.",best:"Mañana"},
{id:"u13",name:"Harry Potter: Forbidden Journey",park:"IoA",cat:["Simulador"],desc:"Ride robótico dentro del castillo de Hogwarts.",minAge:9,restr:"48\" (122 cm)",thrill:4,dur:5,a:0,c:null,note:"Incluida",tips:"Puede marear (motion sickness): avisar antes.",best:"Mañana"},
{id:"u14",name:"The Incredible Hulk Coaster",park:"IoA",cat:["Montaña rusa"],desc:"Lanzamiento 0-67 km/h con 7 inversiones.",minAge:11,restr:"54\" (137 cm)",thrill:5,dur:3,a:0,c:null,note:"Incluida",tips:"Estatura límite para las de 10: medirlas antes de prometerla.",best:"Tarde"},
{id:"u15",name:"The Amazing Adventures of Spider-Man",park:"IoA",cat:["Simulador"],desc:"Clásico 3D de acción, envejeció muy bien.",minAge:7,restr:"40\" (102 cm)",thrill:3,dur:5,a:0,c:null,note:"Incluida",tips:"Renovada en alta definición.",best:"Tarde"},
{id:"u16",name:"Skull Island: Reign of Kong",park:"IoA",cat:["Ride familiar"],desc:"Expedición en camión con Kong gigante animatrónico.",minAge:7,restr:"36\" (91 cm)",thrill:2,dur:6,a:0,c:null,note:"Incluida",tips:"La cola da miedo a niños sensibles; el final es tierno.",best:"Mediodía"},
{id:"u17",name:"Jurassic Park River Adventure",park:"IoA",cat:["Acuático","Ride familiar"],desc:"Paseo en bote con caída de 26 m junto al T-Rex.",minAge:7,restr:"42\" (107 cm)",thrill:3,dur:6,a:0,c:null,note:"Incluida",tips:"TE MOJAS. En enero con frío: última hora o poncho.",best:"Hora cálida"},
{id:"u18",name:"Hogwarts Express",park:"IoA",cat:["Ride familiar","Experiencia"],desc:"Tren real entre Hogsmeade (IoA) y Diagon Alley (USF). Requiere entrada multi-parque.",minAge:3,restr:null,thrill:1,dur:8,a:0,c:null,note:"Incluida (pase multi-parque)",tips:"La experiencia es DISTINTA en cada sentido: hacerla ida y vuelta.",best:"Mediodía"},
{id:"u19",name:"Grinchmas Who-liday Spectacular",park:"IoA",cat:["Show teatro"],desc:"Musical en vivo del Grinch en Seuss Landing. Estacional (~hasta 3 ene, verificar).",minAge:3,restr:null,thrill:1,dur:30,a:0,c:null,note:"Incluido · estacional",tips:"Teatro techado: perfecto para descansar. Llegar 30 min antes.",best:"Ver app"},
{id:"u20",name:"Poseidon's Fury",park:"IoA",cat:["Show teatro"],desc:"Caminata guiada con efectos de agua y fuego en un templo.",minAge:6,restr:null,thrill:2,dur:20,a:0,c:null,note:"Incluida",tips:"De pie todo el tiempo (NO sirve para descansar).",best:"Tarde"},
{id:"u21",name:"Mario Kart: Bowser's Challenge",park:"Epic",cat:["Simulador","Ride familiar"],desc:"Mario Kart en realidad aumentada en Super Nintendo World.",minAge:6,restr:"40\" (102 cm) · solo: 48\"",thrill:2,dur:6,a:0,c:null,note:"Incluida",tips:"La más popular de Epic: rope drop o virtual queue.",best:"Apertura"},
{id:"u22",name:"Harry Potter: Battle at the Ministry",park:"Epic",cat:["Simulador"],desc:"La atracción más avanzada del mundo (2025): batalla con Umbridge en el Ministerio.",minAge:7,restr:"40\" (102 cm)",thrill:3,dur:6,a:0,c:null,note:"Incluida",tips:"Confirmado: tu pase ilimitado INCLUYE Epic Universe.",best:"Mañana"},
{id:"u23",name:"Stardust Racers",park:"Epic",cat:["Montaña rusa"],desc:"Coaster de lanzamiento dual en Celestial Park, hermosa de noche.",minAge:11,restr:"48\" (122 cm)",thrill:5,dur:3,a:0,c:null,note:"Incluida",tips:"Montarla de noche con el parque iluminado.",best:"Noche"},
{id:"u24",name:"Hiccup's Wing Gliders",park:"Epic",cat:["Montaña rusa"],desc:"Coaster familiar de lanzamiento en Isle of Berk (Cómo Entrenar a tu Dragón).",minAge:7,restr:"40\" (102 cm)",thrill:3,dur:3,a:0,c:null,note:"Incluida",tips:"Ideal primera coaster 'grande' para las de 10.",best:"Mañana"},
{id:"u25",name:"Mine-Cart Madness",park:"Epic",cat:["Montaña rusa"],desc:"Coaster de Donkey Kong que 'salta' los rieles (efecto visual único).",minAge:7,restr:"42\" (107 cm) · verificar",thrill:3,dur:3,a:0,c:null,note:"Incluida",tips:"Fila larga constante: monitorear en la app.",best:"Mediodía"},
{id:"u26",name:"Monsters Unchained: Frankenstein Experiment",park:"Epic",cat:["Simulador"],desc:"Dark ride de Dark Universe con los monstruos clásicos. Intenso y oscuro.",minAge:8,restr:"48\" (122 cm)",thrill:4,dur:5,a:0,c:null,note:"Incluida",tips:"Puede asustar a las de 10: es la más 'oscura' de Epic.",best:"Tarde"},
{id:"u27",name:"Le Cirque Arcanus",park:"Epic",cat:["Show teatro"],desc:"Show de circo + magia del mundo de Animales Fantásticos. Teatro espectacular.",minAge:6,restr:null,thrill:1,dur:30,a:0,c:null,note:"Incluido",tips:"IMPERDIBLE para amantes de musicales. Reservar horario en la app.",best:"Según horario"},
{id:"u28",name:"The Untrainable Dragon",park:"Epic",cat:["Show teatro"],desc:"Show con dragones volando sobre el público (Cómo Entrenar a tu Dragón).",minAge:4,restr:null,thrill:1,dur:25,a:0,c:null,note:"Incluido",tips:"Dragones de tamaño real vuelan sobre tu cabeza. Llegar 30 min antes.",best:"Según horario"},
{id:"u29",name:"Volcano Bay (parque acuático)",park:"Volcano",cat:["Acuático"],desc:"Parque acuático premium con volcán Krakatau. En enero puede cerrar por frío o mantenimiento.",minAge:5,restr:"Varias atracciones 42-48\"",thrill:3,dur:300,a:0,c:null,note:"Incluida según pase · VERIFICAR APERTURA",tips:"Confirmar el día anterior. Si la máxima es <24°C, mejor omitir.",best:"Día cálido"},
{id:"u30",name:"Celebración NYE en CityWalk",park:"CityWalk",cat:["Concierto","Show calle"],desc:"31 dic: bandas en vivo + DJ + lluvia de confeti a medianoche. Entrada GRATIS.",minAge:3,restr:null,thrill:2,dur:240,a:0,c:0,note:"GRATIS",tips:"Música desde las 16:00; el área Promenade es la más familiar.",best:"21:00-00:15"},
{id:"u31",name:"Hollywood Drive-In Mini Golf",park:"CityWalk",cat:["Experiencia"],desc:"Dos campos de mini golf temáticos (horror retro y aliens).",minAge:4,restr:null,thrill:1,dur:60,a:18,c:16,note:"~$18 adulto / $16 niño",tips:"Mejor de noche con las luces de neón.",best:"Noche"},
{id:"u32",name:"Hard Rock Live Orlando (conciertos)",park:"CityWalk",cat:["Concierto"],desc:"Venue de conciertos medianos dentro de CityWalk. Revisar cartelera para las fechas del viaje.",minAge:8,restr:"Según evento (algunos 18+)",thrill:2,dur:150,a:60,c:null,note:"Variable $40-120 según artista",tips:"La cartelera de enero se publica meses antes en hardrock.com.",best:"Noche"},

{id:"d1",name:"TRON Lightcycle / Run",park:"MK",cat:["Montaña rusa"],desc:"Coaster de lanzamiento estilo moto de luz. Una de las más nuevas de Disney.",minAge:9,restr:"48\" (122 cm)",thrill:4,dur:3,a:199,c:null,note:"Entrada MK: ~$174-209 por persona según fecha (NYE = la más cara). TODO: precio de entrada cubre todas las atracciones",tips:"Virtual queue o Lightning Lane; de noche la iluminación es brutal.",best:"Noche"},
{id:"d2",name:"Space Mountain",park:"MK",cat:["Montaña rusa"],desc:"Coaster indoor en la oscuridad, clásico desde 1975.",minAge:8,restr:"44\" (112 cm)",thrill:4,dur:3,a:0,c:null,note:"Incluida con entrada",tips:"Más 'brusca' de lo que parece; avisar a las de 10.",best:"Mañana"},
{id:"d3",name:"Seven Dwarfs Mine Train",park:"MK",cat:["Montaña rusa"],desc:"Coaster familiar suave de Blancanieves con vagones que se balancean.",minAge:6,restr:"38\" (97 cm)",thrill:2,dur:3,a:0,c:null,note:"Incluida",tips:"Fila eterna: rope drop o Lightning Lane.",best:"Apertura"},
{id:"d4",name:"Tiana's Bayou Adventure",park:"MK",cat:["Acuático","Ride familiar"],desc:"Log flume de La Princesa y el Sapo (ex Splash Mountain).",minAge:6,restr:"40\" (102 cm)",thrill:3,dur:8,a:0,c:null,note:"Incluida",tips:"Te mojas: en enero hacerla a la hora más cálida.",best:"13:00-15:00"},
{id:"d5",name:"Big Thunder Mountain",park:"MK",cat:["Montaña rusa"],desc:"Coaster de tren minero RENOVADA: reabrió el 3-may-2026 tras 16 meses de obras, con nueva escena inicial y trenes nuevos.",minAge:7,restr:"40\" (102 cm) — reducido en la renovación 2026: verificar en app",thrill:3,dur:4,a:0,c:null,note:"Incluida",tips:"De noche es más rápida (mito confirmado). Recién renovada: puede tener filas algo más largas de lo normal.",best:"Noche"},
{id:"d6",name:"Festival of Fantasy Parade",park:"MK",cat:["Desfile"],desc:"Desfile diario con el dragón de Malefica que escupe fuego.",minAge:3,restr:null,thrill:1,dur:25,a:0,c:null,note:"Incluido",tips:"Ver desde Frontierland: mismo show, menos gente que Main Street.",best:"~14:00 (verif. app)"},
{id:"d7",name:"Happily Ever After (fuegos)",park:"MK",cat:["Fuegos"],desc:"Show nocturno de proyecciones + fuegos sobre el castillo.",minAge:3,restr:null,thrill:1,dur:18,a:0,c:null,note:"Incluido",tips:"Lugar en el Hub 45-60 min antes. O verlo desde el ferry: gratis y sin multitud.",best:"~21:00"},
{id:"d8",name:"Mickey's PhilharMagic",park:"MK",cat:["Show teatro"],desc:"Cine 4D musical con Donald. Teatro grande, entra mucha gente.",minAge:3,restr:null,thrill:1,dur:12,a:0,c:null,note:"Incluido",tips:"Descanso perfecto con aire acondicionado.",best:"Hora pico"},
{id:"d9",name:"Haunted Mansion",park:"MK",cat:["Ride familiar"],desc:"Mansión embrujada clásica, divertida más que aterradora.",minAge:5,restr:null,thrill:2,dur:8,a:0,c:null,note:"Incluida",tips:"El stretching room puede asustar a muy pequeños (no aplica aquí).",best:"Tarde"},
{id:"d10",name:"Pirates of the Caribbean",park:"MK",cat:["Ride familiar"],desc:"Paseo en bote entre piratas, largo y relajado.",minAge:4,restr:null,thrill:1,dur:9,a:0,c:null,note:"Incluida",tips:"Buena para descansar: 9 minutos sentados.",best:"Hora pico"},
{id:"d11",name:"Guardians of the Galaxy: Cosmic Rewind",park:"EPCOT",cat:["Montaña rusa"],desc:"Coaster indoor con lanzamiento hacia atrás y música aleatoria. Favorita absoluta de pre-teens.",minAge:8,restr:"42\" (107 cm)",thrill:4,dur:3,a:174,c:null,note:"Entrada EPCOT: ~$154-184 pp",tips:"Virtual queue 7:00 AM en la app o Lightning Lane Single Pass (~$15-18 pp).",best:"Virtual queue"},
{id:"d12",name:"Test Track 3.0",park:"EPCOT",cat:["Ride familiar","Simulador"],desc:"Diseña tu auto y pruébalo a 105 km/h. Renovada 2025.",minAge:7,restr:"40\" (102 cm)",thrill:3,dur:5,a:0,c:null,note:"Incluida",tips:"Single rider divide al grupo pero ahorra 40 min.",best:"Mañana"},
{id:"d13",name:"Soarin' Around the World",park:"EPCOT",cat:["Simulador"],desc:"Vuelo simulado sobre paisajes del mundo con olores.",minAge:5,restr:"40\" (102 cm)",thrill:2,dur:6,a:0,c:null,note:"Incluida",tips:"Fila corta al final del día.",best:"Noche"},
{id:"d14",name:"Frozen Ever After",park:"EPCOT",cat:["Ride familiar"],desc:"Paseo en bote por Arendelle (pabellón Noruega).",minAge:3,restr:null,thrill:1,dur:5,a:0,c:null,note:"Incluida",tips:"Las niñas la aman; fila larga siempre: rope drop.",best:"Apertura"},
{id:"d15",name:"Remy's Ratatouille Adventure",park:"EPCOT",cat:["Ride familiar"],desc:"Ride 3D sin rieles en el pabellón de Francia.",minAge:4,restr:null,thrill:2,dur:5,a:0,c:null,note:"Incluida",tips:"Single rider disponible.",best:"Tarde"},
{id:"d16",name:"World Showcase: paseo de países",park:"EPCOT",cat:["Experiencia","Compras"],desc:"11 países con comida, música en vivo gratis (mariachis, taiko, Voices of Liberty) y tiendas.",minAge:3,restr:null,thrill:1,dur:180,a:0,c:null,note:"Incluido",tips:"Las presentaciones musicales son GRATIS e incluidas: revisar horarios en app.",best:"Tarde-noche"},
{id:"d17",name:"Luminous: The Symphony of Us",park:"EPCOT",cat:["Fuegos"],desc:"Show nocturno de fuegos, fuentes y música sobre la laguna.",minAge:3,restr:null,thrill:1,dur:20,a:0,c:null,note:"Incluido",tips:"Mejor vista: entre México y Canadá o el puente de Francia.",best:"~21:00"},
{id:"d18",name:"Journey of Water (Moana)",park:"EPCOT",cat:["Experiencia"],desc:"Sendero interactivo de agua inspirado en Moana.",minAge:3,restr:null,thrill:1,dur:30,a:0,c:null,note:"Incluida",tips:"Ruta 'seca' disponible si hace frío.",best:"Mediodía"},
{id:"d19",name:"Star Wars: Rise of the Resistance",park:"HS",cat:["Simulador","Experiencia"],desc:"La atracción más inmersiva de Disney: 18 minutos de misión completa.",minAge:7,restr:"40\" (102 cm)",thrill:3,dur:18,a:184,c:null,note:"Entrada HS: ~$164-194 pp",tips:"Rope drop o última hora; se daña seguido: hacerla apenas se pueda.",best:"Apertura"},
{id:"d20",name:"Slinky Dog Dash",park:"HS",cat:["Montaña rusa"],desc:"Coaster familiar en Toy Story Land.",minAge:6,restr:"38\" (97 cm)",thrill:3,dur:2,a:0,c:null,note:"Incluida",tips:"Fila eterna: Lightning Lane o rope drop.",best:"Apertura"},
{id:"d21",name:"Twilight Zone Tower of Terror",park:"HS",cat:["Ride familiar"],desc:"Caída libre aleatoria en un hotel embrujado.",minAge:8,restr:"40\" (102 cm)",thrill:4,dur:5,a:0,c:null,note:"Incluida",tips:"Las caídas son aleatorias: nunca es la misma experiencia.",best:"Noche"},
{id:"d22",name:"Rock 'n' Roller Coaster Starring The Muppets",park:"HS",cat:["Montaña rusa"],desc:"Lanzamiento 0-92 km/h REIMAGINADA con los Muppets (reabrió 26-may-2026): Dr. Teeth y Electric Mayhem en el estudio G-Force.",minAge:11,restr:"48\" (122 cm)",thrill:5,dur:2,a:0,c:null,note:"Incluida",tips:"Overlay navideño del 4-nov al 6-ene: ¡su día de HS (mié 6 ene) es el ÚLTIMO del overlay festivo!",best:"Mañana"},
{id:"d23",name:"Fantasmic!",park:"HS",cat:["Show teatro","Fuegos"],desc:"El mejor show nocturno de Disney: Mickey vs villanos con agua, fuego y personajes en barco.",minAge:4,restr:null,thrill:2,dur:30,a:0,c:null,note:"Incluido",tips:"ANFITEATRO: llegar 45-60 min antes en fechas llenas. Es sentado: gran descanso nocturno.",best:"Última función (menos gente)"},
{id:"d24",name:"Frozen Sing-Along Celebration",park:"HS",cat:["Show teatro"],desc:"Cantata cómica de Frozen con los 'historiadores reales'. Sorprendentemente divertida para adultos.",minAge:3,restr:null,thrill:1,dur:30,a:0,c:null,note:"Incluido",tips:"Teatro grande con A/C: descanso asegurado.",best:"Mediodía"},
{id:"d25",name:"Indiana Jones Epic Stunt Spectacular",park:"HS",cat:["Show teatro"],desc:"Acrobacias en vivo al estilo de las películas clásicas.",minAge:6,restr:null,thrill:2,dur:30,a:0,c:null,note:"Incluido",tips:"Anfiteatro techado. Efectos de fuego reales.",best:"Según horario"},
{id:"d26",name:"The Little Mermaid: A Musical Adventure",park:"HS",cat:["Show teatro"],desc:"Musical renovado (2025) de La Sirenita con efectos y marionetas.",minAge:3,restr:null,thrill:1,dur:25,a:0,c:null,note:"Incluido",tips:"Funciones continuas: buen comodín para descansar.",best:"Tarde"},
{id:"d27",name:"Disney Villains: Unfairly Ever After",park:"HS",cat:["Show teatro"],desc:"Show nuevo (2025) donde los villanos reclaman su versión de la historia.",minAge:5,restr:null,thrill:1,dur:25,a:0,c:null,note:"Incluido",tips:"Humor para toda la familia; teatro Sunset Showcase.",best:"Tarde"},
{id:"d28",name:"Avatar Flight of Passage",park:"AK",cat:["Simulador"],desc:"Vuelo en banshee: el simulador más impresionante que existe.",minAge:8,restr:"44\" (112 cm)",thrill:4,dur:5,a:154,c:null,note:"Entrada AK: ~$144-174 pp",tips:"Rope drop obligatorio o Lightning Lane Single Pass (~$14-17 pp).",best:"Apertura"},
{id:"d29",name:"Kilimanjaro Safaris",park:"AK",cat:["Animales","Ride familiar"],desc:"Safari en camión por sabana real: jirafas, leones, elefantes.",minAge:3,restr:null,thrill:1,dur:20,a:0,c:null,note:"Incluida",tips:"En enero los animales están MÁS activos con el frío: ir temprano.",best:"8:00-10:00"},
{id:"d30",name:"Expedition Everest",park:"AK",cat:["Montaña rusa"],desc:"Coaster del Himalaya con el Yeti (va hacia atrás).",minAge:8,restr:"44\" (112 cm)",thrill:4,dur:4,a:0,c:null,note:"Incluida",tips:"Single rider rapidísimo.",best:"Mañana"},
{id:"d31",name:"Festival of the Lion King",park:"AK",cat:["Show teatro"],desc:"EL MEJOR SHOW DE DISNEY WORLD: musical circular con acróbatas, fuego y canciones del Rey León.",minAge:3,restr:null,thrill:1,dur:30,a:0,c:null,note:"Incluido",tips:"Llegar 30-40 min antes. Sentados, techado: el descanso perfecto de 7 personas.",best:"13:00-15:00"},
{id:"d32",name:"Finding Nemo: The Big Blue and Beyond",park:"AK",cat:["Show teatro"],desc:"Musical en vivo de Nemo con marionetas gigantes (estilo Broadway).",minAge:3,restr:null,thrill:1,dur:25,a:0,c:null,note:"Incluido",tips:"Combinar con Lion King: teatro de 12:00 + teatro de 14:00 = tarde de descanso.",best:"Mediodía"},
{id:"d33",name:"DINOSAUR — CERRADA (feb-2026)",park:"AK",cat:["Simulador"],desc:"Cerró PERMANENTEMENTE en feb-2026 con todo DinoLand U.S.A.: hoy es la obra de Tropical Americas (Pueblo Esperanza + Indiana Jones + Encanto, apertura ~2027). NO estará en el viaje.",minAge:8,restr:"—",thrill:3,dur:4,a:0,c:null,note:"Cerrada permanentemente",tips:"Su sucesor (Indiana Jones) abre con Tropical Americas en 2027, después del viaje. No la incluyan en planes.",best:"—"},
{id:"d34",name:"Zootopia: Better Zoogether!",park:"AK",cat:["Show teatro"],desc:"Show 4D de Zootopia dentro del Árbol de la Vida (estrenado nov-2025: reemplazó It's Tough to Be a Bug).",minAge:3,restr:null,thrill:1,dur:12,a:0,c:null,note:"Incluido",tips:"Teatro bajo el árbol: cómodo y rápido.",best:"Cualquiera"},
{id:"d35",name:"Na'vi River Journey",park:"AK",cat:["Ride familiar"],desc:"Paseo en bote bioluminiscente por Pandora.",minAge:3,restr:null,thrill:1,dur:6,a:0,c:null,note:"Incluida",tips:"Hermosa y calmada: contraste perfecto tras Flight of Passage.",best:"Tarde"},
{id:"d36",name:"Wilderness Explorers",park:"AK",cat:["Experiencia"],desc:"Juego de insignias tipo UP por todo el parque. GRATIS y las niñas se obsesionan.",minAge:5,restr:null,thrill:1,dur:120,a:0,c:0,note:"GRATIS",tips:"Recoger el libro en el puente de entrada.",best:"Todo el día"},
{id:"d37",name:"Disney Springs: música en vivo gratis",park:"Springs",cat:["Concierto","Show calle"],desc:"Escenarios gratuitos todas las noches: Waterside Stage, The Landing y músicos callejeros. Entrada al complejo GRATIS.",minAge:3,restr:null,thrill:1,dur:120,a:0,c:0,note:"GRATIS (sin entrada)",tips:"Revisar el calendario semanal en la app de Disney: suele haber 3-4 actos por noche.",best:"18:00-22:00"},
{id:"d38",name:"Cirque du Soleil: Drawn to Life",park:"Springs",cat:["Show teatro"],desc:"Show del Cirque du Soleil exclusivo de Disney: acrobacias + animación. Teatro permanente.",minAge:5,restr:null,thrill:2,dur:90,a:95,c:75,note:"~$85-135 adulto según asiento / niño 3-9 menor",tips:"Para 7 personas ≈ $600-750: decisión grande, pero es el mejor show pagado de Orlando. Comprar con meses de anticipación.",best:"Funciones ma/sá/do (verif.)"},
{id:"d39",name:"Aerophile Balloon",park:"Springs",cat:["Experiencia"],desc:"Globo aerostático amarrado con vista 360° a 120 m.",minAge:3,restr:"Según clima (viento)",thrill:1,dur:10,a:30,c:25,note:"~$30 adulto / $25 niño",tips:"Se cancela con viento: tener plan B.",best:"Atardecer"},
{id:"d40",name:"Amphicar + tiendas Disney Springs",park:"Springs",cat:["Experiencia","Compras"],desc:"Autos anfibios que navegan la laguna ($125/auto, 3-4 personas) + World of Disney (la tienda Disney más grande del mundo).",minAge:3,restr:null,thrill:1,dur:90,a:0,c:0,note:"Caminar gratis; Amphicar $125/auto",tips:"World of Disney: hacer las compras de souvenirs aquí el día 1 ene (sin prisa de parque).",best:"Tarde"},
{id:"s1",name:"Mako",park:"SeaWorld",cat:["Montaña rusa"],desc:"Hipercoaster de 61 m: la más alta y rápida de Orlando.",minAge:11,restr:"54\" (137 cm)",thrill:5,dur:3,a:100,c:null,note:"Entrada SeaWorld ~$70-110 pp (online más barata)",tips:"Fila corta casi siempre.",best:"Mañana"},
{id:"s2",name:"Orca Encounter + Sea Lion High",park:"SeaWorld",cat:["Animales","Show teatro"],desc:"Shows de orcas y leones marinos (comedia). Anfiteatros con sombra.",minAge:3,restr:null,thrill:1,dur:25,a:0,c:null,note:"Incluido",tips:"Filas 'splash zone' = mojarse seguro.",best:"Según horario"},
{id:"s3",name:"SeaWorld Christmas Celebration",park:"SeaWorld",cat:["Show calle","Experiencia"],desc:"Evento navideño con luces, patinaje y fuegos (~hasta 3 ene, verificar).",minAge:3,restr:null,thrill:1,dur:120,a:0,c:null,note:"Incluido · estacional",tips:"Complemento perfecto si van a SeaWorld el 2-3 ene.",best:"Noche"},

{id:"o1",name:"Kennedy Space Center",park:"Otros",cat:["Museo","Experiencia"],desc:"Centro espacial real: Saturn V, transbordador Atlantis, bus a plataformas de lanzamiento. 1 h de Orlando.",minAge:6,restr:null,thrill:2,dur:420,a:80,c:70,note:"~$80 adulto · 7 personas ≈ $560",tips:"Llegar a apertura y hacer el bus tour primero. Llevar snacks (comida interna cara).",best:"Día completo"},
{id:"o2",name:"Orlando Science Center",park:"Otros",cat:["Museo"],desc:"Museo de ciencia interactivo de 4 pisos con dinosaurios y planetario.",minAge:5,restr:null,thrill:1,dur:180,a:25,c:19,note:"~$25 adulto / ~$19 niño 3-11",tips:"Buen plan de medio día económico si llueve.",best:"Tarde"},
{id:"o3",name:"ICON Park (The Wheel + museos)",park:"Otros",cat:["Experiencia","Museo"],desc:"Rueda de la fortuna de 120 m + Museum of Illusions + Madame Tussauds en I-Drive.",minAge:3,restr:null,thrill:1,dur:120,a:30,c:26,note:"Wheel ~$30; combos con museos ahorran",tips:"Combo Wheel+Museum of Illusions ≈ $45 pp.",best:"Atardecer"},
{id:"o4",name:"Gatorland",park:"Otros",cat:["Animales"],desc:"El 'parque de caimanes' clásico de Florida (1949): shows y zip line sobre cocodrilos.",minAge:5,restr:"Zip line: 37 kg mínimo",thrill:2,dur:240,a:35,c:25,note:"~$35 adulto / ~$25 niño",tips:"Zip line extra (~$70): la de 15 la amará.",best:"Mañana"},
{id:"o5",name:"Boggy Creek Airboat Adventures",park:"Otros",cat:["Experiencia","Animales"],desc:"Paseo en aerobote por pantanos reales buscando caimanes salvajes.",minAge:4,restr:null,thrill:2,dur:60,a:35,c:30,note:"~$35-40 pp",tips:"Con frío los caimanes salen a tomar sol al mediodía: reservar 11:00-13:00.",best:"Mediodía"},
{id:"o6",name:"Old Town Kissimmee + Car Cruise",park:"Otros",cat:["Show calle","Compras"],desc:"Calle temática años 50: desfile de autos clásicos los sábados (~16:00) GRATIS, tiendas y rueda.",minAge:3,restr:null,thrill:1,dur:180,a:0,c:0,note:"GRATIS (rides aparte)",tips:"Plan de sábado perfecto y barato: 9 ene encaja ideal.",best:"Sábado 16:00-20:00"},
{id:"o7",name:"WonderWorks",park:"Otros",cat:["Museo"],desc:"'La casa al revés' de I-Drive: 100+ exhibiciones interactivas de ciencia.",minAge:5,restr:"Algunas atracciones 42\"",thrill:1,dur:150,a:35,c:26,note:"~$35 adulto / ~$26 niño",tips:"3 horas máximo; combinar con cena en I-Drive.",best:"Tarde"},
{id:"o8",name:"Crayola Experience",park:"Otros",cat:["Experiencia"],desc:"Centro interactivo de Crayola en Florida Mall: 26 actividades creativas.",minAge:4,restr:null,thrill:1,dur:150,a:28,c:28,note:"~$28 pp",tips:"Más para menores de 10; las de 10 aún la disfrutan, la de 15 quizá no.",best:"Mañana"},
{id:"o9",name:"Dr. Phillips Center (Broadway)",park:"Otros",cat:["Concierto","Show teatro"],desc:"Centro de artes de Orlando: giras de Broadway y conciertos. Revisar cartelera de enero 2027.",minAge:8,restr:"Según show",thrill:1,dur:150,a:80,c:null,note:"$50-150 según show",tips:"Si hay un musical de gira, es una noche inolvidable para las 3 niñas.",best:"Noche"},
{id:"o10",name:"runDisney Marathon Weekend (espectador)",park:"Otros",cat:["Show calle","Experiencia"],desc:"~6-10 ene (verificar): maratones por los parques Disney al amanecer. Ver correr es GRATIS y emotivo.",minAge:3,restr:null,thrill:1,dur:120,a:0,c:0,note:"GRATIS",tips:"Cierres viales de madrugada cerca de Disney: planear transporte esos días.",best:"Madrugada vie-dom"},
{id:"o11",name:"Fun Spot America",park:"Otros",cat:["Montaña rusa","Experiencia"],desc:"Parque clásico con go-karts y Mine Blower (coaster de madera).",minAge:6,restr:"Varía por atracción",thrill:3,dur:180,a:60,c:null,note:"Pase de día ~$60; entrada gratis y pagar por ride",tips:"Buena opción de tarde flexible sin compromiso.",best:"Tarde-noche"},
{id:"o12",name:"Chocolate Kingdom Tour",park:"Otros",cat:["Museo","Experiencia"],desc:"Tour de fábrica de chocolate con degustación (I-Drive).",minAge:4,restr:null,thrill:1,dur:60,a:20,c:16,note:"~$20 adulto / $16 niño",tips:"Plan corto dulce para un día de descanso.",best:"Mañana"}
];


/* COMIDA · protein = score 1-5 de proteína/$ · res = cómo reservar */
const COMIDA = [
{id:"r1",name:"Thunder Falls Terrace",park:"IoA",zone:"Universal",service:"Rápido",a:19,c:11,note:"Combo costillas+pollo ~$19",protein:5,proteinNote:"~50g proteína por $19 = el mejor de los parques",dishes:"Costillas BBQ, pollo rostizado, bowls de arroz",res:"No requiere",seating:"Mesas techadas amplias",tips:"Pedir combos para compartir entre 7 = ~$110 todos."},
{id:"r2",name:"Three Broomsticks",park:"IoA",zone:"Universal",service:"Rápido",a:20,c:10,note:"Great Feast para 4 ~$80",protein:4,proteinNote:"Great Feast: pollo entero + costillas, rinde para 4-5",dishes:"Great Feast, fish & chips, butterbeer",res:"No requiere",seating:"Mesas techadas (gran salón)",tips:"Pedir 1-2 Great Feast para los 7 + extras = ~$130 todos."},
{id:"r3",name:"Mythos",park:"IoA",zone:"Universal",service:"Mesa",a:32,c:12,note:"Platos $22-42",protein:4,proteinNote:"Filete y cerdo a buen precio para restaurante de parque",dishes:"Braised pork, filete, pad thai",res:"App/web Universal (30 días antes)",seating:"Mesas · cueva con cascada",tips:"El restaurante de parque más premiado de EE.UU. Reservar."},
{id:"r4",name:"Spit Fyre Grill",park:"Epic",zone:"Universal",service:"Rápido",a:19,c:11,note:"Costillas ~$19",protein:5,proteinNote:"Costillas y pollo al fuego: top proteína/$ de Epic",dishes:"Ribs, pollo, mac & cheese",res:"No requiere",seating:"Mesas con vista al show de dragones",tips:"Ver el show de agua Fyre Drill desde la terraza."},
{id:"r5",name:"Das Stakehaus",park:"Epic",zone:"Universal",service:"Rápido",a:21,c:11,note:"Steak QS ~$21",protein:4,proteinNote:"Steak en restaurante rápido (tema vampiros)",dishes:"Steak, pollo, ensaladas",res:"No requiere",seating:"Mesas temáticas Dark Universe",tips:"De los pocos QS con steak real."},
{id:"r6",name:"Toadstool Cafe",park:"Epic",zone:"Universal",service:"Mesa",a:28,c:13,note:"Platos $18-35",protein:3,proteinNote:"Experiencia > proteína, pero hay pollo y pasta con carne",dishes:"Super Mushroom Soup, Mt. Beanpole Cake",res:"App Universal (muy demandada)",seating:"Mesas con 'ventanas' animadas de Nintendo",tips:"Reservar apenas se abra: la experiencia favorita de niños en Epic."},
{id:"r7",name:"The Leaky Cauldron",park:"USF",zone:"Universal",service:"Rápido",a:18,c:10,note:"Platos británicos ~$16-20",protein:4,proteinNote:"Bangers & mash, cottage pie: comida contundente",dishes:"Bangers & mash, fish & chips, butterbeer",res:"No requiere",seating:"Mesas techadas en Diagon Alley",tips:"Ir 11:00 o 14:30 para evitar la marea."},
{id:"r8",name:"Today Cafe",park:"USF",zone:"Universal",service:"Rápido",a:15,c:9,note:"Bowls y sandwiches ~$13-17",protein:4,proteinNote:"Bowls con pollo/pavo: de lo más sano en USF",dishes:"Bowls de proteína, sandwiches de pavo",res:"No requiere",seating:"Algunas mesas",tips:"Opción saludable top dentro de USF."},
{id:"r9",name:"Bigfire",park:"CityWalk",zone:"Universal",service:"Mesa",a:38,c:14,note:"Carnes al fuego $28-55",protein:5,proteinNote:"Cortes de carne al fuego de leña: excelente calidad",dishes:"Steaks, chuleta de cerdo, s'mores de mesa",res:"OpenTable/web Universal",seating:"Mesas amplias · ambiente lodge",tips:"Los s'mores en la mesa encantan a las niñas."},
{id:"r10",name:"NBC Sports Grill & Brew",park:"CityWalk",zone:"Universal",service:"Mesa",a:26,c:12,note:"Platos $18-32",protein:4,proteinNote:"Alitas, burgers, ribs: proteína sólida a precio justo",dishes:"Alitas, ribs, burgers",res:"Walk-in usualmente",seating:"Mesas + 100 pantallas",tips:"Buena opción sin reserva cuando todo está lleno."},
{id:"r14",name:"Satu'li Canteen",park:"AK",zone:"Disney",service:"Rápido",a:17,c:11,note:"Bowls ~$16-18",protein:5,proteinNote:"EL MEJOR proteína/$ de Disney: bowl con pollo o res a la parrilla + granos",dishes:"Create-Your-Own Bowl (pollo/res/tofu), pods bao",res:"No requiere · mobile order",seating:"Mesas techadas amplias",tips:"Mobile order 30-45 min antes. Los bowls se pueden compartir."},
{id:"r15",name:"Flame Tree Barbecue",park:"AK",zone:"Disney",service:"Rápido",a:17,c:11,note:"Platos BBQ ~$15-19",protein:5,proteinNote:"Ribs, pollo y cerdo ahumado: porciones generosas",dishes:"Sampler de ribs+pollo+pulled pork, mac & cheese",res:"No requiere · mobile order",seating:"Terrazas junto al agua",tips:"El sampler alimenta a 2 personas fácil."},
{id:"r16",name:"Regal Eagle Smokehouse",park:"EPCOT",zone:"Disney",service:"Rápido",a:17,c:11,note:"BBQ ~$15-19",protein:5,proteinNote:"Brisket y costillas estilo Texas en EPCOT",dishes:"Brisket, ribs, sampler de BBQ",res:"No requiere",seating:"Mesas techadas enormes",tips:"El mejor QS de EPCOT para comer mucho y bien."},
{id:"r17",name:"Cosmic Ray's Starlight Cafe",park:"MK",zone:"Disney",service:"Rápido",a:15,c:10,note:"Pollo rostizado ~$14-17",protein:4,proteinNote:"Medio pollo rostizado con puré: comida real a precio QS",dishes:"Pollo rostizado, ribs combo, burgers",res:"No requiere",seating:"Salón enorme con show de Sonny Eclipse",tips:"Show animatrónico gratis mientras comes."},
{id:"r18",name:"Columbia Harbour House",park:"MK",zone:"Disney",service:"Rápido",a:16,c:10,note:"Salmón y pescado ~$15-18",protein:4,proteinNote:"Salmón a la parrilla: la opción más sana de MK",dishes:"Salmón, camarones, lobster roll",res:"No requiere",seating:"Mesas en 2 pisos (piso 2 siempre vacío)",tips:"El segundo piso es el secreto para sentar a 7."},
{id:"r19",name:"Docking Bay 7",park:"HS",zone:"Disney",service:"Rápido",a:17,c:11,note:"Platos ~$16-19",protein:4,proteinNote:"Costillas ahumadas y pollo en Galaxy's Edge",dishes:"Smoked Kaadu Ribs, pollo rostizado",res:"No requiere · mobile order",seating:"Hangar techado",tips:"Las ribs son sorprendentemente buenas."},
{id:"r20",name:"Ronto Roasters",park:"HS",zone:"Disney",service:"Rápido",a:13,c:null,note:"Wraps ~$13",protein:3,proteinNote:"Wrap de cerdo asado: barato y rico, porción mediana",dishes:"Ronto Wrap, Ronto Breakfast Wrap",res:"No requiere",seating:"Pocas mesas (llevar caminando)",tips:"Snack-proteína ideal entre shows."},
{id:"r21",name:"Via Napoli",park:"EPCOT",zone:"Disney",service:"Mesa",a:30,c:12,note:"Pizzas $24-35 · Mezzo Metro familiar ~$50",protein:3,proteinNote:"Pizza gigante para compartir: rinde y encanta",dishes:"Pizza Mezzo Metro (para 3-5), pastas",res:"App Disney (60 días antes)",seating:"Mesas grandes · IDEAL GRUPOS",tips:"La Mezzo Metro + ensaladas alimenta a 5-6 por ~$70 total."},
{id:"r22",name:"Biergarten",park:"EPCOT",zone:"Disney",service:"Buffet",a:49,c:29,note:"Buffet ~$49 adulto / $29 niño 3-9",protein:4,proteinNote:"Buffet alemán: salchichas, schnitzel, pollo, todo ilimitado",dishes:"Buffet alemán + banda oompah en vivo",res:"App Disney (60 días)",seating:"Mesas largas compartidas estilo Oktoberfest",tips:"SHOW EN VIVO incluido con la cena: comida + entretenimiento en uno."},

{id:"r23",name:"Garden Grill",park:"EPCOT",zone:"Disney",service:"Familiar",a:62,c:40,note:"Family-style ~$62 adulto",protein:4,proteinNote:"Filete, pavo y cerdo ilimitados servidos a la mesa",dishes:"Family-style con personajes (Chip, Dale, Mickey granjero)",res:"App Disney (60 días)",seating:"Mesas · restaurante GIRATORIO",tips:"Caro pero: personajes + comida ilimitada + restaurante que gira. Ojo: las de 10 pagan adulto."},
{id:"r24",name:"Rose & Crown",park:"EPCOT",zone:"Disney",service:"Mesa",a:32,c:12,note:"Pub británico $25-40",protein:4,proteinNote:"Fish & chips, shepherd's pie, brisket",dishes:"Fish & chips, bangers & mash",res:"App Disney (60 días)",seating:"Mesas · patio con VISTA A FUEGOS del lago",tips:"Reservar 20:00 y pedir mesa patio = cena + Luminous desde tu asiento."},
{id:"r25",name:"Liberty Tree Tavern",park:"MK",zone:"Disney",service:"Familiar",a:45,c:26,note:"Family-style ~$45 adulto",protein:4,proteinNote:"Pavo, roast beef y cerdo ilimitados estilo Thanksgiving",dishes:"Family-style Patriot's Platter",res:"App Disney (60 días)",seating:"Mesas coloniales acogedoras",tips:"Ilimitado + sentados 1 hora = descanso perfecto en día MK."},
{id:"r26",name:"Be Our Guest",park:"MK",zone:"Disney",service:"Mesa",a:72,c:43,note:"Prix fixe ~$72 adulto (3 tiempos)",protein:3,proteinNote:"Filete y pollo en menú prix fixe",dishes:"Filete, pollo asado, the Grey Stuff",res:"App Disney (60 días) · SE AGOTA",seating:"Salón del castillo de Bestia (espectacular)",tips:"Caro para 7 (~$500) pero es cenar DENTRO del castillo. Decisión emocional."},
{id:"r27",name:"Cinderella's Royal Table",park:"MK",zone:"Disney",service:"Familiar",a:75,c:45,note:"Prix fixe con princesas ~$75 adulto",protein:3,proteinNote:"Comida correcta; el valor es la experiencia princesas",dishes:"Prix fixe + visita de princesas a la mesa",res:"App Disney (60 días) · la más difícil de Disney",seating:"Dentro del castillo de Cenicienta",tips:"Si las niñas de 10 aman princesas: vale. Reservar al segundo exacto en que abre (6 AM EST)."},
{id:"r28",name:"Tusker House",park:"AK",zone:"Disney",service:"Buffet",a:62,c:40,note:"Buffet con personajes ~$62 adulto",protein:4,proteinNote:"Buffet africano/familiar con Donald y amigos",dishes:"Buffet + personajes safari",res:"App Disney (60 días)",seating:"Mesas amplias",tips:"Personajes + comida variada: las niñas comen de todo."},
{id:"r29",name:"Sci-Fi Dine-In",park:"HS",zone:"Disney",service:"Mesa",a:28,c:13,note:"Platos $20-32",protein:3,proteinNote:"Burgers y ribs; el valor es el ambiente",dishes:"Burgers, ribs, milkshakes",res:"App Disney (60 días)",seating:"AUTOS-CINE: mesas dentro de carros viendo películas retro",tips:"Experiencia única: cenar en un auto viendo cine B. Las niñas alucinan."},
{id:"r30",name:"50's Prime Time Cafe",park:"HS",zone:"Disney",service:"Mesa",a:27,c:13,note:"Comida casera $20-30",protein:4,proteinNote:"Fried chicken y pot roast: contundente",dishes:"Fried chicken, pot roast, meatloaf",res:"App Disney (60 días)",seating:"Mesas · meseros actúan como 'familia' regañona",tips:"Divertidísimo: los meseros te regañan si no te comes las verduras."},

{id:"r11",name:"Antojitos",park:"CityWalk",zone:"Universal",service:"Mesa",a:26,c:12,note:"Mexicana $18-32",protein:4,proteinNote:"Tacos de carne asada, fajitas para compartir",dishes:"Fajitas, tacos, guacamole en mesa",res:"OpenTable/web Universal",seating:"Mesas · ambiente festivo",tips:"Fajitas para 2 rinden para 3 niñas."},
{id:"r31",name:"The Polite Pig",park:"Springs",zone:"Disney Springs",service:"Rápido",a:17,c:10,note:"BBQ $14-20",protein:5,proteinNote:"BBQ nominado a James Beard: brisket y pollo top a precio QS",dishes:"Brisket, pulled pork, pollo ahumado, sides",res:"No requiere",seating:"Mesas amplias",tips:"EL MEJOR proteína/$ de Disney Springs. Llegar antes de 18:00."},
{id:"r32",name:"Chicken Guy!",park:"Springs",zone:"Disney Springs",service:"Rápido",a:11,c:8,note:"Tenders ~$9-13",protein:4,proteinNote:"Tenders de pollo de Guy Fieri: barato y rico",dishes:"Chicken tenders + 22 salsas",res:"No requiere",seating:"Pocas mesas",tips:"El almuerzo más barato y proteico de Springs para 7 (~$75 todos)."},
{id:"r33",name:"Homecomin'",park:"Springs",zone:"Disney Springs",service:"Mesa",a:29,c:13,note:"Comida sureña $22-38",protein:4,proteinNote:"El fried chicken más famoso de Disney",dishes:"Fried chicken, thigh high chicken biscuits",res:"App Disney/OpenTable · MUY difícil",seating:"Mesas con vista a la laguna",tips:"Reservar con 60 días. Si no hay: walk-up barra a veces disponible."},
{id:"r34",name:"The Boathouse",park:"Springs",zone:"Disney Springs",service:"Mesa",a:38,c:13,note:"Steaks/seafood $28-60",protein:5,proteinNote:"Steaks y mariscos premium; porciones enormes",dishes:"Filete, salmón, lobster roll, burgers",res:"OpenTable/web",seating:"Mesas frente al agua + amphicars",tips:"Pedir mesa en el muelle al atardecer."},
{id:"r35",name:"Raglan Road",park:"Springs",zone:"Disney Springs",service:"Mesa",a:28,c:12,note:"Pub irlandés $22-35",protein:4,proteinNote:"Fish & chips y shepherd's pie + SHOW IRLANDÉS GRATIS",dishes:"Fish & chips, ribs, bread pudding",res:"OpenTable/web",seating:"Mesas frente al escenario",tips:"Música y baile irlandés EN VIVO incluido con la cena: comida + show."},
{id:"r36",name:"Morimoto Asia",park:"Springs",zone:"Disney Springs",service:"Mesa",a:36,c:14,note:"Asiática $25-55",protein:4,proteinNote:"Pato laqueado, sushi, ramen",dishes:"Pato Pekín, Morimoto ramen, sushi",res:"OpenTable",seating:"Mesas elegantes 2 pisos",tips:"El ramen es excelente para noche fría."},
{id:"r37",name:"Wine Bar George",park:"Springs",zone:"Disney Springs",service:"Mesa",a:32,c:12,note:"Tapas y tablas $25-45",protein:4,proteinNote:"Tablas de quesos/charcutería + skirt steak",dishes:"Tablas para compartir, skirt steak, mac & cheese trufado",res:"OpenTable",seating:"Mesas + terraza",tips:"Tablas para compartir = perfecto para grupos que picotean."},
{id:"r38",name:"Jaleo",park:"Springs",zone:"Disney Springs",service:"Mesa",a:40,c:null,note:"Tapas españolas $30-55",protein:4,proteinNote:"Tapas de José Andrés: jamón, croquetas, carne",dishes:"Tapas, paella (para 2-4)",res:"OpenTable",seating:"Mesas modernas",tips:"La paella familiar es una experiencia para los 7."},
{id:"r39",name:"Cafe Mineiro Brazilian Steakhouse",park:"Otros",zone:"Fuera (I-Drive)",service:"Buffet",a:30,c:15,note:"Rodizio AYCE ~$28-34 adulto",protein:5,proteinNote:"TODO LO QUE PUEDAS COMER: 10+ cortes servidos a la mesa. EL MEJOR proteína/$ de Orlando",dishes:"Rodizio de carnes + barra de ensaladas",res:"Walk-in o web",seating:"Mesas grandes",tips:"7 personas ≈ $210-240 con carne ILIMITADA. Imbatible tras día de compras."},
{id:"r40",name:"Bolay",park:"Otros",zone:"Fuera (varios)",service:"Rápido",a:13,c:8,note:"Bowls ~$12-15",protein:5,proteinNote:"Bowls frescos: doble proteína (pollo+steak) por $14",dishes:"Bol personalizable: base + 2 proteínas + veggies",res:"No requiere",seating:"Mesas",tips:"La opción sana-barata #1 fuera de parques."},
{id:"r41",name:"Chipotle / Cava (I-Drive)",park:"Otros",zone:"Fuera (I-Drive)",service:"Rápido",a:14,c:9,note:"Bowls ~$12-16",protein:4,proteinNote:"Doble proteína en el bowl = ~60g por $14",dishes:"Bowls y burritos",res:"No requiere",seating:"Mesas",tips:"Pedir bowl (no burrito) con doble carne = máxima proteína/$."},
{id:"r42",name:"Miller's Ale House",park:"Otros",zone:"Fuera (varios)",service:"Mesa",a:19,c:9,note:"Platos $14-24",protein:4,proteinNote:"Zingers, steaks económicos, alitas",dishes:"Zingers, steaks, fajitas",res:"Walk-in",seating:"Mesas + deportes en TV",tips:"Porciones grandes, precio justo: clásico local."},
{id:"r43",name:"Keke's Breakfast Cafe",park:"Otros",zone:"Fuera (varios)",service:"Mesa",a:14,c:8,note:"Desayunos $11-16",protein:4,proteinNote:"Omelettes de 3 huevos + proteína: gran desayuno proteico",dishes:"Omelettes, pancakes gigantes, french toast",res:"Walk-in",seating:"Mesas",tips:"El brunch del 1 de ene. Abre hasta 14:30."},
{id:"r44",name:"Hash House A Go Go",park:"Otros",zone:"Fuera (I-Drive)",service:"Mesa",a:22,c:11,note:"Platos GIGANTES $18-26",protein:4,proteinNote:"Porciones absurdas: 1 plato = 2 personas",dishes:"Fried chicken con waffles, meatloaf",res:"Walk-in/OpenTable",seating:"Mesas",tips:"Pedir 4 platos para 7 y compartir: sobra comida."},
{id:"r45",name:"Publix (supermercado)",park:"Otros",zone:"Fuera (varios)",service:"Rápido",a:9,c:null,note:"Subs ~$7-10 · pollo rostizado entero $8",protein:4,proteinNote:"Pollo rostizado $8 + ensaladas = cena proteica para 2 por $12",dishes:"Pub Subs, pollo rostizado, ensaladas",res:"No",seating:"No (llevar al hotel)",tips:"Comprar desayunos y snacks aquí = ahorro de $50+/día para 7."},
{id:"r46",name:"Golden Corral",park:"Otros",zone:"Fuera (varios)",service:"Buffet",a:19,c:12,note:"Buffet ~$17-21 adulto",protein:4,proteinNote:"Buffet ilimitado con carnes asadas",dishes:"Buffet completo + carvery",res:"Walk-in",seating:"Mesas grandes",tips:"Calidad media pero imbatible para alimentar a 7 por ~$130."},
{id:"r47",name:"Toothsome Chocolate Emporium",park:"CityWalk",zone:"Universal",service:"Mesa",a:27,c:12,note:"Platos $19-34",protein:3,proteinNote:"Steak y burgers correctos; la fama son los shakes",dishes:"Burgers, steak frites, milkshakes gigantes",res:"OpenTable",seating:"Mesas steampunk",tips:"Un shake para compartir entre 2 niñas (son enormes)."},
{id:"r48",name:"Vivo Italian Kitchen",park:"CityWalk",zone:"Universal",service:"Mesa",a:28,c:12,note:"Italiana $20-35",protein:3,proteinNote:"Pastas frescas + pollo parmigiana",dishes:"Pastas, pollo parm, pizzas",res:"OpenTable",seating:"Mesas modernas",tips:"Buena pasta fresca cuando se antoja italiano en Universal."}
];
COMIDA.splice(10,0,
{id:"r12",name:"The Cowfish",park:"CityWalk",zone:"Universal",service:"Mesa",a:30,c:12,note:"Sushi + burgers $20-38",protein:4,proteinNote:"Burgushi: lo mejor de dos mundos",dishes:"Burgushi, sushi rolls, burgers",res:"OpenTable",seating:"Mesas modernas",tips:"Algo para todos: sushi para los adultos, burgers para las niñas."},
{id:"r13",name:"Voodoo Doughnut",park:"CityWalk",zone:"Universal",service:"Rápido",a:6,c:null,note:"Donas $4-8",protein:1,proteinNote:"Es postre: antojo, no proteína",dishes:"Donas gigantes icónicas",res:"No requiere",seating:"Pocas mesas",tips:"Comprar una caja para el hotel: desayuno barato del día siguiente."});

/* v5: CAFÉ · HELADO · SNACKS (categoría "Café/Snack": aparece en el filtro de servicio y en la pestaña ☕) */
COMIDA.push(
{id:"r49",name:"Main Street Bakery (Starbucks)",park:"MK",zone:"Disney",service:"Café/Snack",a:7,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Café y bakery: energía y ánimo, no proteína",dishes:"Starbucks completo + cinnamon rolls",res:"No requiere · mobile order en app Disney",seating:"Pocas mesas (Main Street)",tips:"El Starbucks oficial de MK: pedir por mobile order para saltar la fila de la mañana."},
{id:"r50",name:"Aloha Isle",park:"MK",zone:"Disney",service:"Café/Snack",a:6,c:null,note:"Dole Whip ~$6",protein:1,proteinNote:"El postre icónico de Disney: antojo, no proteína",dishes:"Dole Whip de piña (original, swirl y float)",res:"No requiere · mobile order",seating:"Mesas junto a Adventureland",tips:"El Dole Whip float con jugo de piña es el mejor antojo de calor de MK."},
{id:"r51",name:"Gaston's Tavern",park:"MK",zone:"Disney",service:"Café/Snack",a:7,c:null,note:"Rollos y bebidas ~$6-8",protein:1,proteinNote:"Bakery temático: antojo, no proteína",dishes:"Cinnamon roll gigante, LeFou's Brew (manzana frozen)",res:"No requiere",seating:"Mesas con temática de La Bella y la Bestia",tips:"El cinnamon roll alcanza para 2 niñas; el salón de los cuernos de caza es la foto obligada."},
{id:"r52",name:"Connections Café (Starbucks)",park:"EPCOT",zone:"Disney",service:"Café/Snack",a:7,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Café y sandwiches: energía, no proteína",dishes:"Starbucks completo + sandwiches y bakery",res:"No requiere · mobile order",seating:"Salón amplio con mesas (World Celebration)",tips:"El Starbucks de EPCOT: buen wifi y mesas para recargar celulares a media tarde."},
{id:"r53",name:"L'Artisan des Glaces",park:"EPCOT",zone:"Disney",service:"Café/Snack",a:8,c:null,note:"Helado artesanal ~$6-9",protein:1,proteinNote:"Heladería francesa: el postre top de EPCOT",dishes:"Helados y sorbetes artesanales, macaron con helado, brioche prensado",res:"No requiere",seating:"Pocas mesas (pabellón Francia)",tips:"El helado en brioche prensado (caliente-frío) es legendario: pedir uno por cada 2 personas."},
{id:"r54",name:"Trolley Car Cafe (Starbucks)",park:"HS",zone:"Disney",service:"Café/Snack",a:7,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Café y bakery: energía, no proteína",dishes:"Starbucks completo con temática de tranvía",res:"No requiere · mobile order",seating:"Mesas (Hollywood Blvd)",tips:"El Starbucks de HS: pedir mobile order antes de salir de un show para no hacer fila."},
{id:"r55",name:"Creature Comforts (Starbucks)",park:"AK",zone:"Disney",service:"Café/Snack",a:7,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Café y bakery: energía, no proteína",dishes:"Starbucks + bakery con temática de animales",res:"No requiere · mobile order",seating:"Mesas (Discovery Island)",tips:"El Starbucks de AK: la fila baja muchísimo después de las 14:00."},
{id:"r56",name:"Florean Fortescue's Ice-Cream",park:"USF",zone:"Universal",service:"Café/Snack",a:8,c:null,note:"Helado ~$6-9",protein:1,proteinNote:"Heladería de Harry Potter: antojo, no proteína",dishes:"Helado de butterbeer, sticky toffee, sabores mágicos",res:"No requiere",seating:"Pocas mesas (Diagon Alley)",tips:"El helado de butterbeer SOLO existe aquí: parada obligatoria en Diagon Alley."},
{id:"r57",name:"Butterbeer (carros de Hogsmeade y Diagon)",park:"IoA",zone:"Universal",service:"Café/Snack",a:8,c:null,note:"Butterbeer ~$8",protein:1,proteinNote:"Bebida dulce icónica: antojo, no proteína",dishes:"Butterbeer fría, frozen y caliente (solo invierno)",res:"No requiere",seating:"De pie / bancas de Hogsmeade",tips:"La frozen es la favorita; la CALIENTE solo sale en invierno y es perfecta para enero. También en USF."},
{id:"r58",name:"Starbucks IoA (Port of Entry)",park:"IoA",zone:"Universal",service:"Café/Snack",a:7,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Café: energía, no proteína",dishes:"Starbucks completo",res:"No requiere",seating:"Mesas (entrada del parque)",tips:"Está en la entrada: ideal para el café de llegada o el último antes de salir del parque."},
{id:"r59",name:"Moonship Chocolates & Celestial Sweets",park:"Epic",zone:"Universal",service:"Café/Snack",a:9,c:null,note:"Chocolates ~$6-12",protein:1,proteinNote:"Chocolatería artesanal: antojo, no proteína",dishes:"Chocolates artesanales y dulces de Celestial Park",res:"No requiere",seating:"Mostrador (Celestial Park)",tips:"El postre de lujo para la caminata nocturna por Celestial Park iluminado."},
{id:"r60",name:"Gideon's Bakehouse",park:"Springs",zone:"Disney Springs",service:"Café/Snack",a:6,c:null,note:"Cookies ~$6 c/u",protein:1,proteinNote:"Las cookies más famosas de Orlando: antojo, no proteína",dishes:"Cookies de media libra (chocolate chip + edición limitada del mes)",res:"Fila virtual",seating:"Pocas mesas",tips:"Registrarse en la fila virtual APENAS llegan a Springs y volver 1-2 h después: se agotan."},
{id:"r61",name:"Ghirardelli Soda Fountain",park:"Springs",zone:"Disney Springs",service:"Café/Snack",a:12,c:null,note:"Sundaes ~$10-14",protein:1,proteinNote:"Sundaes gigantes: antojo, no proteína",dishes:"Sundaes enormes, chocolate caliente, squares de chocolate de regalo",res:"No requiere",seating:"Mesas",tips:"Un sundae alcanza para 2-3 personas: pedir varios para compartir y probar de todo."});

/* v6: subtipo (cafe/helado/postre/snack/bebida) + bandera hype para los 13 originales */
const SNACK_SUB = {r49:"cafe",r50:"helado",r51:"postre",r52:"cafe",r53:"helado",r54:"cafe",r55:"cafe",r56:"helado",r57:"bebida",r58:"cafe",r59:"postre",r60:"postre",r61:"helado"};
const SNACK_HYPE = ["r50","r53","r56","r57","r59","r60"];
COMIDA.forEach(r=>{ if(SNACK_SUB[r.id]) r.sub = SNACK_SUB[r.id]; if(SNACK_HYPE.includes(r.id)) r.hype = true; });

/* v6 · BLOQUE 1/3: Magic Kingdom + EPCOT (parte 1) */
COMIDA.push(
{id:"r62",name:"Plaza Ice Cream Parlor",park:"MK",zone:"Disney",service:"Café/Snack",sub:"helado",a:9,c:null,note:"Helado ~$6-9",protein:1,proteinNote:"Heladería clásica: antojo, no proteína",dishes:"Sundaes estilo años 1900, conos, floats",res:"No requiere · mobile order",seating:"Pocas mesas (Main Street)",tips:"El salón de helados original de Main Street: el sundae de brownie es el clásico eterno."},
{id:"r63",name:"Storybook Treats",park:"MK",zone:"Disney",service:"Café/Snack",sub:"helado",hype:true,a:7,c:null,note:"Floats ~$7",protein:1,proteinNote:"Floats temáticos: antojo, no proteína",dishes:"Peter Pan Float (limón-lima + piña Dole Whip), floats de temporada",res:"No requiere",seating:"Mesas (Fantasyland)",tips:"El Peter Pan Float es el snack más fotografiado de Fantasyland: verde, ácido y adictivo."},
{id:"r64",name:"Cheshire Café",park:"MK",zone:"Disney",service:"Café/Snack",sub:"snack",hype:true,a:6,c:null,note:"Snacks ~$5-7",protein:1,proteinNote:"Hojaldre dulce: antojo, no proteína",dishes:"Cheshire Cat Tail (hojaldre de chocolate), slushies",res:"No requiere",seating:"Bancas junto a la taza de té",tips:"El Cheshire Cat Tail se agota: comprarlo antes de mediodía."},
{id:"r65",name:"Sleepy Hollow Refreshments",park:"MK",zone:"Disney",service:"Café/Snack",sub:"postre",hype:true,a:9,c:null,note:"Waffles y funnel ~$7-10",protein:1,proteinNote:"Waffles y funnel cakes: antojo, no proteína",dishes:"Funnel cake con fresas y crema, waffle de frutas con Nutella",res:"No requiere · mobile order",seating:"Mesas con vista al castillo (Liberty Square)",tips:"La ventana con LA vista al castillo: el funnel cake de fresas es legendario."},
{id:"r66",name:"Sunshine Tree Terrace",park:"MK",zone:"Disney",service:"Café/Snack",sub:"bebida",hype:true,a:7,c:null,note:"Swirls ~$6-8",protein:1,proteinNote:"Swirl de naranja: antojo, no proteína",dishes:"Citrus Swirl (naranja-vainilla del Orange Bird), Orange Cream",res:"No requiere",seating:"Bancas (Adventureland)",tips:"El Citrus Swirl del Orange Bird volvió por demanda popular: objeto de culto de los fans de MK."},
{id:"r67",name:"Kringla Bakeri Og Kafe",park:"EPCOT",zone:"Disney",service:"Café/Snack",sub:"postre",hype:true,a:6,c:null,note:"Bakery ~$5-8",protein:1,proteinNote:"Bakery noruego: antojo, no proteína",dishes:"School Bread (bollo de crema y coco), Lefse, Troll Horn",res:"No requiere",seating:"Mesas del pabellón Noruega",tips:"El School Bread es EL snack de culto de EPCOT desde hace décadas: probarlo es tradición."},
{id:"r68",name:"Les Halles Boulangerie-Patisserie",park:"EPCOT",zone:"Disney",service:"Café/Snack",sub:"postre",hype:true,a:9,c:null,note:"Repostería francesa ~$5-9",protein:1,proteinNote:"Patisserie francesa: antojo, no proteína",dishes:"Macarons, éclairs, napoleones, croissants, baguettes",res:"No requiere",seating:"Pocas mesas (fondo del pabellón Francia)",tips:"Panadería francesa real: ir temprano, los mejores postres se agotan por la tarde."});

/* v6 · BLOQUE 2/3: Animal Kingdom + Universal Studios + Islands of Adventure + CityWalk */
COMIDA.push(
{id:"r76",name:"Pongu Pongu",park:"AK",zone:"Disney",service:"Café/Snack",sub:"bebida",hype:true,a:9,c:null,note:"Bebidas ~$7-10",protein:1,proteinNote:"Bebidas y lumpia: antojo, no proteína",dishes:"Night Blossom (limonada de colores con perlas), Pongu Lumpia (piña-queso crema)",res:"No requiere",seating:"Bancas de Pandora",tips:"El Night Blossom es la bebida más instagrammable de Animal Kingdom; el lumpia dulce-salado engancha."},
{id:"r77",name:"Tamu Tamu Refreshments",park:"AK",zone:"Disney",service:"Café/Snack",sub:"helado",a:7,c:null,note:"Dole Whip ~$6-8",protein:1,proteinNote:"Dole Whip: antojo, no proteína",dishes:"Dole Whip de piña (versión de AK), Simba Sunset",res:"No requiere",seating:"Mesas (África)",tips:"Sí: AK también tiene Dole Whip y con mucha menos fila que en Magic Kingdom."},
{id:"r78",name:"Kusafiri Coffee Shop & Bakery",park:"AK",zone:"Disney",service:"Café/Snack",sub:"cafe",a:6,c:null,note:"Café y bakery ~$5-8",protein:1,proteinNote:"Café y panadería: energía ligera",dishes:"Café de especialidad, colossal cinnamon roll",res:"No requiere",seating:"Mesas (África)",tips:"El cinnamon roll gigante de AK: desayuno rápido antes de Kilimanjaro Safaris."},
{id:"r79",name:"Lard Lad Donuts",park:"USF",zone:"Universal",service:"Café/Snack",sub:"postre",hype:true,a:7,c:null,note:"Donas ~$5-8",protein:1,proteinNote:"Donas: antojo, no proteína",dishes:"Big Pink Donut (dona rosa gigante de Los Simpson), donas normales",res:"No requiere",seating:"Mesas de Springfield",tips:"La Big Pink alcanza para 3-4 personas y es LA foto de Springfield."},
{id:"r80",name:"TODAY Cafe",park:"USF",zone:"Universal",service:"Café/Snack",sub:"cafe",a:8,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Café y pastelería: energía ligera",dishes:"Cafés de especialidad, sandwiches de desayuno, pastelería",res:"No requiere",seating:"Salón temático del show TODAY",tips:"El café con más diseño de USF, justo en la entrada: ideal apenas abren."},
{id:"r81",name:"San Francisco Pastry Company",park:"USF",zone:"Universal",service:"Café/Snack",sub:"postre",a:7,c:null,note:"Pastelería ~$5-8",protein:1,proteinNote:"Pastelería: antojo, no proteína",dishes:"Croissants, napoleones, cheesecake, café",res:"No requiere",seating:"Mesas (zona San Francisco)",tips:"Pastelería subestimada: casi sin fila y postres grandes para compartir."},
{id:"r82",name:"Honeydukes",park:"IoA",zone:"Universal",service:"Café/Snack",sub:"postre",hype:true,a:8,c:null,note:"Dulces ~$5-12",protein:1,proteinNote:"Dulces de Harry Potter: antojo",dishes:"Chocolate Frog (con carta coleccionable), Bertie Bott's Every Flavour Beans, fudge",res:"No requiere",seating:"Tienda (Hogsmeade)",tips:"La rana de chocolate con carta de mago es el souvenir comestible #1 de Harry Potter."},
{id:"r83",name:"Hop on Pop Ice Cream Shop",park:"IoA",zone:"Universal",service:"Café/Snack",sub:"helado",a:7,c:null,note:"Helado ~$6-8",protein:1,proteinNote:"Helado: antojo, no proteína",dishes:"Conos y sundaes estilo Dr. Seuss",res:"No requiere",seating:"Mesas (Seuss Landing)",tips:"El helado con más colorido del parque: las niñas lo aman."},
{id:"r84",name:"Croissant Moon Bakery",park:"IoA",zone:"Universal",service:"Café/Snack",sub:"cafe",a:8,c:null,note:"Bakery y café ~$5-9",protein:1,proteinNote:"Café y panadería: energía ligera",dishes:"Croissants, muffins, sándwiches de desayuno, café",res:"No requiere",seating:"Mesas (Port of Entry)",tips:"Desayuno tranquilo apenas entras al parque, antes de correr a Hagrid's."},
{id:"r85",name:"Cinnabon",park:"CityWalk",zone:"Universal",service:"Café/Snack",sub:"postre",a:7,c:null,note:"Rolls ~$5-8",protein:1,proteinNote:"Cinnamon rolls: antojo, no proteína",dishes:"Cinnamon rolls clásicos y Minibon, café",res:"No requiere",seating:"Pocas mesas (CityWalk)",tips:"El olor te atrapa al pasar: caja de Minibons para el hotel."},
{id:"r86",name:"Cold Stone Creamery",park:"CityWalk",zone:"Universal",service:"Café/Snack",sub:"helado",a:9,c:null,note:"Helado ~$7-10",protein:1,proteinNote:"Helado mezclado: antojo, no proteína",dishes:"Helado mezclado en piedra fría con toppings a elegir",res:"No requiere",seating:"Mesas (CityWalk)",tips:"Armar el Create Your Own con brownie: el postre de despedida de CityWalk."},
{id:"r87",name:"Starbucks CityWalk",park:"CityWalk",zone:"Universal",service:"Café/Snack",sub:"cafe",a:7,c:null,note:"Café ~$5-8",protein:1,proteinNote:"Starbucks: energía + café",dishes:"Menú Starbucks completo",res:"No requiere",seating:"Salón amplio",tips:"El café de llegada antes de entrar a los parques: abre temprano."});

/* v6 · FUERA DE PARQUES: joyas locales de Orlando con hype (verificado: premios Orlando Magazine/Sentinel/Weekly, Food Network) */
COMIDA.push(
{id:"r95",name:"The Glass Knife",park:"Otros",zone:"Orlando (fuera de parques)",service:"Café/Snack",sub:"postre",hype:true,a:12,c:null,note:"Postres ~$8-14 · Winter Park (2 sedes)",protein:1,proteinNote:"Pastelería de autor + brunch: antojo",dishes:"Cakes de autor, donas gourmet, pastelería francesa, brunch completo",res:"Reserva recomendada para brunch",seating:"Salón elegante (nivel Instagram)",tips:"EL sitio de postres con más hype de Orlando: ganador de Mejor Postre de la ciudad 2019-2026 seguido (Orlando Magazine, Orlando Sentinel y Orlando Weekly). Ideal el día de outlets o el último día (Winter Park queda camino al norte)."},
{id:"r96",name:"Se7en Bites",park:"Otros",zone:"Orlando (fuera de parques)",service:"Café/Snack",sub:"postre",hype:true,a:10,c:null,note:"Repostería ~$6-12 · Milk District",protein:1,proteinNote:"Repostería sureña: antojo",dishes:"Nightime SkyPie de vainilla-bourbon-tocino (el de la TV), galletas gigantes, pies de temporada",res:"No requiere (llegar temprano: se agota)",seating:"Salón + patio",tips:"Famoso por Diners, Drive-Ins and Dives y Triple D Nation con Guy Fieri (Food Network). El SkyPie se agota cada día: ir en la mañana."},
{id:"r97",name:"Donut King",park:"Otros",zone:"Orlando (fuera de parques)",service:"Café/Snack",sub:"postre",hype:true,a:6,c:null,note:"Donas ~$3-6 · Winter Park",protein:1,proteinNote:"Donas clásicas: antojo",dishes:"Donas gigantes clásicas (glaseadas, maple, rellenas), café",res:"No requiere · SOLO EFECTIVO",seating:"Pocas mesas",tips:"Institución local desde los años 70: fila de madrugada los fines de semana. Las donas favoritas de los orlandenses de verdad."},
{id:"r98",name:"Kelly's Homemade Ice Cream",park:"Otros",zone:"Orlando (fuera de parques)",service:"Café/Snack",sub:"helado",hype:true,a:6,c:null,note:"Helado ~$5-8 · 3 sedes (Corrine Dr, Ferncreek, Oviedo)",protein:1,proteinNote:"Helado artesanal: antojo",dishes:"Helado hecho en la tienda (Banana Pudding, O-Dough), sorbetes y opciones sin lácteos",res:"No requiere",seating:"Mesas",tips:"La heladería local querida por los orlandenses: todo hecho en casa, sabores rotativos. La sede Corrine Dr queda cerca del centro."},
{id:"r99",name:"Jeremiah's Italian Ice",park:"Otros",zone:"Orlando (fuera de parques)",service:"Café/Snack",sub:"bebida",a:6,c:null,note:"Italian ice ~$4-7 · varias sedes en Orlando",protein:1,proteinNote:"Hielo italiano: antojo refrescante",dishes:"Italian ice + gelati (capas de helado y hielo italiano)",res:"No requiere",seating:"Mostrador",tips:"Nació en Winter Park en 1996 y hoy es cadena nacional: el gelati es el anti-calor barato del regreso al hotel."},
{id:"r100",name:"Gideon's Bakehouse · Sede Original",park:"Otros",zone:"Orlando (fuera de parques)",service:"Café/Snack",sub:"postre",hype:true,a:6,c:null,note:"Cookies ~$6 · East End Market (Audubon Park)",protein:1,proteinNote:"Cookies: antojo",dishes:"Las mismas cookies de media libra + sabores exclusivos de la sede original",res:"No requiere",seating:"Mesas del mercado",tips:"La Gideon's ORIGINAL: a veces menos fila que Disney Springs y con ediciones exclusivas de esta sede."});

/* v6 · BLOQUE 3/3: Disney Springs */
COMIDA.push(
{id:"r88",name:"Amorette's Patisserie",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"postre",hype:true,a:9,c:null,note:"Postres ~$8-12",protein:1,proteinNote:"Pastelería de autor: antojo",dishes:"Mickey Dome Cake, petit cakes, macarons, éclairs",res:"No requiere",seating:"Pocas mesas",tips:"La pastelería de autor de Springs: el dome cake de Mickey es arte (y viral)."},
{id:"r89",name:"The Ganachery",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"postre",a:9,c:null,note:"Chocolates ~$6-12",protein:1,proteinNote:"Chocolate artesanal: antojo",dishes:"Ganaches de 16 sabores, paletas de chocolate, s'mores",res:"No requiere",seating:"Pocas mesas",tips:"Chocolatería boutique con chocolatero en vivo: la paleta con flor de sal."},
{id:"r90",name:"Vivoli il Gelato",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"helado",a:8,c:null,note:"Gelato ~$6-9",protein:1,proteinNote:"Gelato: antojo, no proteína",dishes:"Gelato italiano, affogato, copas",res:"No requiere",seating:"Pocas mesas",tips:"Gelato de tradición florentina: el affogato (gelato + espresso) para los adultos."},
{id:"r91",name:"Salt & Straw",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"helado",hype:true,a:8,c:null,note:"Helado ~$6-9",protein:1,proteinNote:"Helado de culto: antojo",dishes:"Sabores locos rotativos: Sea Salt con Caramel Ribbons, Honey Lavender, ediciones mensuales",res:"No requiere",seating:"Pocas mesas",tips:"La heladería de culto de Portland: pidan muestras gratis antes de elegir."},
{id:"r92",name:"Sprinkles",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"postre",hype:true,a:6,c:null,note:"Cupcakes ~$5-7",protein:1,proteinNote:"Cupcakes: antojo",dishes:"Cupcakes, cookies, helado + la famosa Cupcake ATM 24h",res:"No requiere",seating:"Pocas mesas",tips:"El cajero automático de cupcakes es la atracción gratis más divertida de Springs."},
{id:"r93",name:"Everglazed Donuts & Cold Brew",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"postre",hype:true,a:7,c:null,note:"Donas ~$5-8",protein:1,proteinNote:"Donas gourmet: antojo",dishes:"Donas gourmet (maple bacon, s'mores, Fruity Pebbles), cold brew",res:"No requiere",seating:"Mesas",tips:"Fila movida pero rápida: dona de maple-bacon + cold brew = desayuno de campeones."},
{id:"r94",name:"Sunshine Churros",park:"Springs",zone:"Disney Springs",service:"Café/Snack",sub:"snack",a:6,c:null,note:"Churros ~$5-7",protein:1,proteinNote:"Churros: antojo",dishes:"Churros clásicos y rellenos (dulce de leche, Nutella)",res:"No requiere",seating:"De pie",tips:"El snack caminable perfecto para recorrer Springs."});

/* v6 · EPCOT (parte 2) + Hollywood Studios */
COMIDA.push(
{id:"r69",name:"Karamel-Küche",park:"EPCOT",zone:"Disney",service:"Café/Snack",sub:"postre",a:7,c:null,note:"Caramelos ~$5-9",protein:1,proteinNote:"Caramelo artesanal: antojo, no proteína",dishes:"Caramelos Werther's hechos a mano, manzanas acarameladas, palomitas de caramelo",res:"No requiere",seating:"Mostrador (Alemania)",tips:"Huele a caramelo desde la calle: las palomitas de caramelo viajan perfectas al hotel."},
{id:"r70",name:"Refreshment Port",park:"EPCOT",zone:"Disney",service:"Café/Snack",sub:"snack",hype:true,a:9,c:null,note:"Poutine ~$9-11",protein:1,proteinNote:"Poutine: snack salado contundente",dishes:"Poutine clásico y beef brisket poutine",res:"No requiere",seating:"Mesas al aire libre (Canadá)",tips:"El snack salado más amado de EPCOT: parada fija del paseo por World Showcase."},
{id:"r71",name:"Kabuki Café",park:"EPCOT",zone:"Disney",service:"Café/Snack",sub:"helado",a:7,c:null,note:"Kakigori ~$6-8",protein:1,proteinNote:"Raspado japonés: antojo, no proteína",dishes:"Kakigori (raspado con leche condensada), helado de té verde",res:"No requiere",seating:"De pie (Japón)",tips:"El kakigori arcoíris con 'sweet milk' es el anti-calor oficial de World Showcase."},
{id:"r72",name:"Funnel Cakes (pabellón USA)",park:"EPCOT",zone:"Disney",service:"Café/Snack",sub:"postre",a:8,c:null,note:"Funnel cake ~$7-9",protein:1,proteinNote:"Funnel cake: antojo, no proteína",dishes:"Funnel cake clásico con azúcar en polvo y toppings de temporada",res:"No requiere",seating:"Mesas del pabellón American Adventure",tips:"Simple, gigante y perfecto para compartir."},
{id:"r73",name:"Hollywood Scoops",park:"HS",zone:"Disney",service:"Café/Snack",sub:"helado",a:7,c:null,note:"Helado ~$6-8",protein:1,proteinNote:"Helado: antojo, no proteína",dishes:"Conos y sundaes clásicos, Mickey Premium Bar",res:"No requiere",seating:"Mesas (Sunset Blvd)",tips:"La parada de helado oficial antes de Tower of Terror y Rock 'n' Roller Coaster."},
{id:"r74",name:"Kat Saka's Kettle",park:"HS",zone:"Disney",service:"Café/Snack",sub:"snack",hype:true,a:7,c:null,note:"Palomitas ~$7",protein:1,proteinNote:"Palomitas de colores: antojo, no proteína",dishes:"Outpost Mix (palomitas dulce-picantes de colores)",res:"No requiere",seating:"De pie (Galaxy's Edge)",tips:"Las palomitas moradas de Batuu son pura moda: sabor dulce-picante que no existe en otro lugar."},
{id:"r75",name:"Baseline Tap House",park:"HS",zone:"Disney",service:"Café/Snack",sub:"snack",a:9,c:null,note:"Pretzel ~$9-11",protein:1,proteinNote:"Pretzel con queso: snack salado",dishes:"Pretzel gigante bávaro con salsa de queso, cervezas y sidras (adultos)",res:"No requiere",seating:"Terraza con mesas a la sombra",tips:"Pretzel + terraza a la sombra = la mejor pausa de media tarde de Hollywood Studios."});


/* SHOWS · horarios TÍPICOS (confirmar en la app el mismo día) · seat = con asiento (descanso) */
const SHOWS = [
{park:"MK",name:"Mickey's Magical Friendship Faire",type:"Teatro/Calle",times:"~10:30, 12:00, 13:30, 15:00, 16:30",dur:20,arrive:"15 min",seat:"No (plaza del castillo)",note:"Show del castillo con Mickey y amigos."},
{park:"MK",name:"Festival of Fantasy Parade",type:"Desfile",times:"~14:00 (verificar)",dur:25,arrive:"30 min",seat:"No (acera)",note:"Mejor punto: Frontierland."},
{park:"MK",name:"Happily Ever After",type:"Nocturno",times:"~21:00",dur:18,arrive:"45-60 min",seat:"No",note:"Fuegos + proyecciones en el castillo."},
{park:"MK",name:"Mickey's PhilharMagic",type:"Teatro",times:"Continuo (cada ~20 min)",dur:12,arrive:"5 min",seat:"SÍ · A/C",note:"Descanso rápido garantizado."},
{park:"MK",name:"Country Bear Musical Jamboree",type:"Teatro/Musical",times:"Continuo (cada ~25 min)",dur:16,arrive:"10 min",seat:"SÍ · A/C",note:"Musical de osos renovado 2024."},
{park:"MK",name:"Monsters Inc. Laugh Floor",type:"Teatro",times:"Continuo (cada ~20 min)",dur:15,arrive:"10 min",seat:"SÍ · A/C",note:"Comedia interactiva: las niñas pueden salir en pantalla."},
{park:"MK",name:"Carousel of Progress",type:"Teatro",times:"Continuo",dur:21,arrive:"0 min",seat:"SÍ · teatro giratorio",note:"Clásico de Walt. Nunca hay fila: el mejor descanso secreto de MK."},
{park:"MK",name:"Dapper Dans + Casey's Corner Pianist",type:"Calle",times:"Varias veces AM/PM",dur:15,arrive:"-",seat:"No",note:"Cuarteto de barberos + pianista ragtime en Main Street."},
{park:"EPCOT",name:"Luminous: The Symphony of Us",type:"Nocturno",times:"~21:00",dur:20,arrive:"30-45 min",seat:"No",note:"Fuegos y fuentes en la laguna."},
{park:"EPCOT",name:"Voices of Liberty",type:"Musical",times:"~12:15-17:15 cada hora (verif.)",dur:15,arrive:"15 min",seat:"SÍ · rotunda techada",note:"Coro a capella espectacular en el pabellón de EE.UU."},
{park:"EPCOT",name:"Mariachi Cobre (México)",type:"Calle",times:"Varias veces PM",dur:20,arrive:"10 min",seat:"Algunas",note:"Mariachi de clase mundial, gratis."},
{park:"EPCOT",name:"Matsuriza Taiko (Japón)",type:"Calle",times:"Varias veces PM",dur:15,arrive:"10 min",seat:"No",note:"Tambores japoneses potentes."},
{park:"HS",name:"Fantasmic!",type:"Nocturno",times:"~19:30 y/o 21:00 (noches llenas 2 funciones)",dur:30,arrive:"45-60 min",seat:"SÍ · anfiteatro",note:"Mickey vs villanos: agua, fuego, barcos. IMPERDIBLE."},
{park:"HS",name:"Frozen Sing-Along Celebration",type:"Teatro/Musical",times:"~10:30-17:30 cada ~90 min",dur:30,arrive:"20 min",seat:"SÍ · A/C",note:"Comedia + cantata: los 'historiadores' son hilarantes."},
{park:"HS",name:"Indiana Jones Epic Stunt Spectacular",type:"Teatro",times:"~12:00, 13:15, 15:15, 16:45 (verif.)",dur:30,arrive:"25 min",seat:"SÍ · techado",note:"Acrobacias y explosiones reales."},
{park:"HS",name:"Beauty and the Beast Live on Stage",type:"Teatro/Musical",times:"~11:00, 13:00, 15:00, 16:30 (verif.)",dur:25,arrive:"20 min",seat:"SÍ · anfiteatro",note:"Musical tipo Broadway con el vestuario original."},
{park:"HS",name:"The Little Mermaid: A Musical Adventure",type:"Teatro/Musical",times:"Continuo (~cada 40 min)",dur:25,arrive:"15 min",seat:"SÍ · A/C",note:"Renovado 2025: marionetas + efectos."},
{park:"HS",name:"Disney Villains: Unfairly Ever After",type:"Teatro/Musical",times:"~Cada hora PM",dur:25,arrive:"15 min",seat:"SÍ · A/C",note:"Villanos cantando su versión. Nuevo 2025."},
{park:"AK",name:"Festival of the Lion King",type:"Teatro/Musical",times:"~10:00, 11:00, 12:00, 14:00, 15:00, 16:00 (verif.)",dur:30,arrive:"30-40 min",seat:"SÍ · teatro circular",note:"EL MEJOR SHOW DE DISNEY. Acróbatas + fuego + música."},
{park:"AK",name:"Finding Nemo: The Big Blue and Beyond",type:"Teatro/Musical",times:"~11:30, 12:30, 14:30, 15:30 (verif.)",dur:25,arrive:"25 min",seat:"SÍ · techado",note:"Marionetas gigantes estilo Broadway."},
{park:"AK",name:"Feathered Friends in Flight",type:"Teatro",times:"~10:30, 12:30, 14:30 (verif.)",dur:25,arrive:"15 min",seat:"SÍ · semi abierto",note:"Aves en vuelo libre sobre el público."},
{park:"USF",name:"The Bourne Stuntacular",type:"Teatro",times:"Continuo (cada ~45 min)",dur:25,arrive:"20 min",seat:"SÍ · A/C",note:"Acción en vivo + pantalla gigante. Top 3 shows de Orlando."},
{park:"USF",name:"Universal Orlando's Horror Make-Up Show",type:"Teatro",times:"~Cada hora",dur:25,arrive:"15 min",seat:"SÍ · A/C",note:"Comedia de efectos especiales."},
{park:"USF",name:"Animal Actors on Location",type:"Teatro",times:"~12:30, 14:00, 15:30 (verif.)",dur:20,arrive:"15 min",seat:"SÍ",note:"Animales entrenados de películas."},
{park:"USF",name:"The Blues Brothers Show",type:"Calle",times:"Varias veces (verif. app)",dur:20,arrive:"10 min",seat:"No",note:"Concierto callejero con autos y baile."},
{park:"USF",name:"Desfile Macy's Holiday Parade",type:"Desfile",times:"~17:30 · estacional (~hasta 3 ene)",dur:30,arrive:"30 min",seat:"No",note:"Globos gigantes + Santa."},
{park:"IoA",name:"Grinchmas Who-liday Spectacular",type:"Teatro/Musical",times:"Varias funciones · estacional (~hasta 3 ene)",dur:30,arrive:"30 min",seat:"SÍ · techado",note:"Musical del Grinch con elenco en vivo."},
{park:"IoA",name:"Frog Choir + Triwizard Spirit Rally",type:"Calle/Musical",times:"Varias veces (verif. app)",dur:15,arrive:"10 min",seat:"No",note:"Coro de ranas de Hogwarts + baile de Beauxbatons/Durmstrang en Hogsmeade."},
{park:"IoA",name:"Oh! The Stories You'll Hear!",type:"Teatro/Musical",times:"Varias veces (verif. app)",dur:15,arrive:"10 min",seat:"SÍ",note:"Musical Dr. Seuss en Seuss Landing."},
{park:"Epic",name:"Le Cirque Arcanus",type:"Teatro",times:"Funciones programadas (app)",dur:30,arrive:"30 min",seat:"SÍ · teatro",note:"Circo + magia de Animales Fantásticos."},
{park:"Epic",name:"The Untrainable Dragon",type:"Teatro",times:"Funciones programadas (app)",dur:25,arrive:"30 min",seat:"SÍ · teatro",note:"Dragones volando sobre el público."},
{park:"Epic",name:"Celestial Park: música y fuentes",type:"Calle",times:"Todo el día · noche iluminada",dur:0,arrive:"-",seat:"Bancas",note:"El parque central es el show: fuentes, música, jardines."},
{park:"SeaWorld",name:"Orca Encounter",type:"Teatro",times:"~12:00, 15:30 (verif.)",dur:25,arrive:"20 min",seat:"SÍ · anfiteatro",note:"Las orcas: educativo e impresionante."},
{park:"SeaWorld",name:"Sea Lion High: The New Class",type:"Teatro",times:"~11:00, 14:00 (verif.)",dur:25,arrive:"20 min",seat:"SÍ · anfiteatro",note:"Comedia con leones marinos y nutrias."},
{park:"Springs",name:"Música en vivo Disney Springs",type:"Concierto/Calle",times:"~18:00-22:00 todas las noches",dur:0,arrive:"-",seat:"No",note:"3-4 actos gratis: Waterside Stage es el principal."},
{park:"EPCOT",name:"Sergio (Italia) + música de pabellones",type:"Calle",times:"Según app",dur:20,arrive:"10 min",seat:"No",note:"Malabarista cómico + músicos en varios países."},
{park:"EPCOT",name:"The American Adventure",type:"Teatro",times:"~Cada hora",dur:30,arrive:"10 min",seat:"SÍ · teatro enorme",note:"Animatrónicos de la historia de EE.UU. 30 min sentados con A/C."},
{park:"CityWalk",name:"Música gratis CityWalk + Rising Star karaoke",type:"Concierto",times:"Noches · karaoke ~20:00+",dur:0,arrive:"-",seat:"Bar",note:"Rising Star: karaoke con banda en vivo (cover ~$7, algunas noches 21+)."}
];


/* COMPRAS · outlets y hard discounts */
const COMPRAS = [
{name:"Orlando Vineland Premium Outlets",zone:"Cerca de Disney (20 min de Springs)",horas:"Lun-Sáb 10:00-21:00 · Dom 10:00-19:00 · 1 ene puede abrir ~11:00 (verificar)",tam:"160 tiendas",key:"Disney Character Warehouse AQUÍ: merch oficial de parques con 30-70% dcto. Ir APENAS ABRE.",tiendas:"Disney Character Warehouse, Nike, Adidas, Coach, Kate Spade, Lululemon, Columbia",tip:"El Disney Character Warehouse forma fila desde las 9:30: llegar a la apertura."},
{name:"Orlando International Premium Outlets",zone:"International Drive",horas:"Lun-Sáb 10:00-21:00 · Dom 10:00-19:00 · 31 dic puede cerrar ~18:00 (verificar)",tam:"180 tiendas (el más grande de Florida)",key:"El más grande: Nike Factory gigante, Coach, Michael Kors, Polo, Saks Off 5th.",tiendas:"Nike, Coach, Michael Kors, Polo Ralph Lauren, Hugo Boss, Saks Off 5th",tip:"Descargar app SIMON+: cupones extra y cash back gratis."},
{name:"Lake Buena Vista Factory Stores",zone:"Junto a Disney (SR-535)",horas:"10:00-19:00 aprox",tam:"50 tiendas",key:"Más pequeño pero con OTRO Disney Character Warehouse y menos gente.",tiendas:"Disney Character Warehouse, Gap, Nike Clearance, Old Navy",tip:"Plan B si el Character Warehouse de Vineland está imposible."},
{name:"The Florida Mall",zone:"Sur de Orlando",horas:"10:00-21:00 aprox",tam:"Mall completo",key:"No es outlet pero tiene liquidaciones fuertes + Crayola Experience + M&M's World.",tiendas:"Apple, Zara, H&M, Macy's, Primark (baratísimo)",tip:"Primark = ropa tipo hard discount. Buen combo con Crayola."}
];

const SHOPPING_DIAS = [
{fecha:"31 dic",nivel:"⚠️ Horario reducido",nota:"Outlets pueden cerrar 17:00-18:00. Solo compras de mañana."},
{fecha:"1 ene",nivel:"🔥 Muy bueno",nota:"Apertura tardía (~11:00) pero arrancan liquidaciones de Año Nuevo. Ideal día suave."},
{fecha:"2 ene",nivel:"🔥 Muy bueno",nota:"Sábado: más gente, pero stock completo de clearance."},
{fecha:"3 ene",nivel:"🔥 Bueno",nota:"Domingo: markdowns continúan."},
{fecha:"5 ene",nivel:"🔥🔥 EL MEJOR",nota:"Martes: markdowns extra de enero + outlets VACÍOS. El día recomendado del plan."},
{fecha:"6 ene",nivel:"🔥🔥 Muy bueno",nota:"Miércoles: igual de vacío que el martes, clearance profundo."},
{fecha:"9 ene",nivel:"✅ Bueno",nota:"Sábado: última oportunidad antes del vuelo. Combinar con Old Town."}
];

/* NYE 31 dic · estrategia completa */
const NYE = {
intro:"El 31 de diciembre ya NO es un día Disney: su plan de entradas Disney arranca el 3 de ene y ahorra ~$1000 para los 7. Suerte doble — Universal está INCLUIDO en su pase: USF e IoA abren hasta la 1:00 AM y la medianoche en CityWalk es GRATIS (música en vivo + confeti). Con 7 personas, frío nocturno (puede bajar a 5-8°C) y niñas de 10-15 años, la estrategia de calor y descanso vale tanto como la de los rides.",
comparacion:[
 {p:"Islands of Adventure ✅ RECOMENDADO",puntos:["Ambiente navideño en su punto: Hogsmeade decorado y Grinchmas Who-liday (temporada ~hasta 3 ene)","Rides estrella hasta la 1:00 AM: Hagrid's, VelociCoaster y Forbidden Journey","Grinchmas = 30 min de teatro techado y sentado: descanso y calor en el pico","Hogsmeade iluminado de noche es de lo más fotogénico del viaje","CityWalk queda a 2 min caminando: la medianoche gratis, resuelta sin correr"],contra:["Es el día MÁS lleno del año: tras la 10:00 las estrellas tocan 90+ min — sin rope drop temprano, acepten filas","Entrada a media tarde = día 'a medias': priorizar 2-3 imperdientes y el resto para el sábado 9"]},
 {p:"USF · Diagon Alley",puntos:["Desfile Macy's Holiday Parade (~17:30): globos gigantes reales, ÚLTIMOS DÍAS de temporada","Diagon Alley de noche + Escape from Gringotts hasta la 1:00 AM","Bourne Stuntacular: el mejor show de acción de Orlando, techado y con A/C","También cierra a la 1:00 AM y queda al lado de CityWalk"],contra:["Pierden la decoración navideña de Hogsmeade y Grinchmas: viven SOLO en IoA","El desfile termina ~18:00: después de la medianoche la noche es de rides, no de fiesta"]}
],
cenas:[
 {name:"Mythos (IoA)",v:"El restaurante de parque mejor premiado de Orlando: steaks, pastas y sopas en interior cálido",pp:"~$25-40",res:"OpenTable con días de antelación (NYE se llena)",grupo:"~$180-280 los 7",place:"Mythos Restaurant, Universal's Islands of Adventure, Orlando, FL",book:"https://www.universalorlando.com/web/en/us/things-to-do/dining/mythos",note:"La única 'reserva seria' de la noche: pedirla esta semana. Caminan desde Hogsmeade 5 minutos."},
 {name:"Three Broomsticks (IoA)",v:"Great Feast compartible + hot butterbeers: comida caliente dentro del parque, sin reserva",pp:"~$18-25",res:"Walk-up (llegar antes de las 19:00)",grupo:"~$130-175 los 7",place:"Three Broomsticks, Universal's Islands of Adventure, Orlando, FL",note:"Mesas largas y techos altos: sitio para 7 sin dramatismo y dentro de la ambientación."},
 {name:"Toothsome Chocolate Emporium (CityWalk)",v:"Steampunk + milkshakes gigantes y comida clásica: interior cálido a un paso de IoA",pp:"~$22-34",res:"OpenTable",grupo:"~$160-240 los 7",place:"The Toothsome Chocolate Emporium, Universal CityWalk, Orlando, FL",book:"https://www.universalorlando.com/web/en/us/things-to-do/dining/the-toothsome-chocolate-emporium-and-savory-feast-kitchen",note:"Un shake para 2 niñas: son absurdos de grandes. Ideal cenar ANTES del conteo."},
 {name:"Bigfire (CityWalk)",v:"Carne a la parrilla junto a la hoguera: el restaurante más 'caliente' de CityWalk",pp:"~$25-35",res:"OpenTable",grupo:"~$180-250 los 7",place:"Bigfire American Fare, Universal CityWalk, Orlando, FL",book:"https://www.universalorlando.com/web/en/us/things-to-do/dining/bigfire-american-fare",note:"Buena proteína/$ para 7 y sobremesa corta: después caminan 2 min al conteo."},
 {name:"Antojitos (CityWalk)",v:"Mexicana generosa: burritos, quesadillas y fajitas para todos",pp:"~$18-26",res:"OpenTable o walk-up",grupo:"~$130-180 los 7",place:"Antojitos Authentic Mexican Food, Universal CityWalk, Orlando, FL",book:"https://www.universalorlando.com/web/en/us/things-to-do/dining/antojitos-authentic-mexican-food",note:"Porciones grandes y picante suave: lo más barato de cenar con mesa en CityWalk."},
 {name:"Plan económico inteligente",v:"Cena temprana con lo que traigan del hotel/Publix + hot butterbeers en el parque al anochecer",pp:"~$12-17",res:"No requiere",grupo:"~$90-120 los 7",place:"Hogsmeade, Universal's Islands of Adventure, Orlando, FL",note:"Sin la batalla de reservas de las 6 AM de Disney: aquí casi todo es walk-up. Lo ahorrado paga el día de outlets."}
],

timeline:[
 ["9:00","Desayuno tranquilo en el hotel: primer día completo del viaje y SIN carrera de reservas Disney"],
 ["10:00","Shuttle GRATIS a CityWalk → entrada a IoA (si hay EPA: llegar 30-45 min antes; verificar qué parque abre temprano)"],
 ["10:30-13:00","Bloque frío: Hagrid's PRIMERO si la cola está <45 min, luego VelociCoaster y Forbidden Journey"],
 ["13:00","Almuerzo temprano: Three Broomsticks (interior, sopas y hot butterbeers)"],
 ["14:00-16:30","Pico del día → Grinchmas Who-liday (teatro techado, sentado) + Frog Choir; rides solo si cola <40 min"],
 ["16:30","Pausa opcional: vuelta al hotel en shuttle (dúcha y capas) o seguir en Seuss Landing"],
 ["17:30","Hogsmeade al atardecer: Hogwarts iluminado + re-ride de la favorita"],
 ["18:30","Cena: Mythos (reserva) o Three Broomsticks walk-up / CityWalk: Toothsome o Bigfire (OpenTable)"],
 ["20:00-22:30","Re-rides nocturnos en IoA: el parque cede un poco mientras CityWalk se llena"],
 ["22:30","Calor final: tiendas de Hogsmeade y Honeydukes; capas y guantes listos"],
 ["23:15","Caminar a CityWalk (2 min desde IoA): música en vivo GRATIS en la Promenade"],
 ["23:30","ASEGURAR LUGAR para el conteo junto al escenario: rotar entre tiendas techadas para calentar"],
 ["00:00","🎉 ¡Feliz 2027! Confeti y música en CityWalk — gratis, sin entradas ni reservas"],
 ["00:15-01:00","Opción A: vuelta a IoA si aún abre (cierra 1:00) para un re-ride final · Opción B: shuttle al hotel (verificar horario nocturno; si no corre, 1 Uber XL ~$12-18)"],
 ["1:00","Cierre: salida con calma. El transporte de Universal no tiene el surge de madrugada que sí cobran los Ubers desde Disney"]
],
calor:["Grinchmas Who-liday (IoA): 30 min de teatro techado con A/C = descanso real","Three Broomsticks (IoA): interior cálido con mesas largas para 7","Honeydukes y tiendas de Hogsmeade: techadas y con calefacción","Bourne Stuntacular + Horror Make-Up (USF con pase park-to-park): sentados y climatizados","Toothsome Chocolate Emporium (CityWalk): chocolate caliente y shakes dentro del salón steampunk","Secadores de mano en los baños de Hogsmeade y CityWalk: sí, sirven para calentar"],
tips:["ROPA: capas térmicas + cortaviento. El 31-dic a medianoche puede sentirse 3-5°C con viento","Hand warmers ($1 c/u): comprar 14 antes del viaje — el frío drena baterías y ánimo","Power banks: fotos + frío = batería que muere rápido; recargar cada tarde","La temporada navideña de Universal termina ~3 ene: Grinchmas y el desfile Macy's se ven HOY o no se ven","CityWalk es GRATIS: EVE (el club) es SOLO 21+ — la fiesta familiar es la de la Promenade, con confeti y orquesta","Verificar en concierge el horario nocturno del shuttle; plan B = 1 Uber XL ~$12-18 (mucho menos que los 2 Ubers con surge desde Disney)","Mythos es la única cena NYE que vale OpenTable con días de antelación: el resto es walk-up","Sin reservas de las 6 AM ni app de Disney: su primera noche empieza SIN estrés de reserva"]
};

/* CLAVES · reglas de oro */
const CLAVES = [
{t:"💵 Regla de oro de precios",d:"Disney y Universal cobran ADULTO desde los 10 años. Las 3 niñas (10, 10, 15) pagan tarifa adulta en entradas y casi todos los buffets (niño = 3-9). Presupuestar como 7 adultos."},
{t:"📅 Reservas de restaurantes",d:"Disney: abren 60 días antes a las ~6:00 AM EST en la app My Disney Experience. NYE ya no es Disney: sin carrera del 1 nov. Universal/Springs: OpenTable o web, 30-60 días. Las más difíciles: Cinderella's Royal Table, California Grill, Space 220, Homecomin', Toadstool Cafe."},
{t:"🎟️ Entradas Disney estimadas (verificar)",d:"1 día 1 parque: MK ~$174-209 · HS ~$164-194 · EPCOT ~$154-184 · AK ~$144-174 por persona. Park Hopper +$70-90. Lightning Lane Multi Pass ~$25-40 pp/día. Precios dinámicos: NYE es lo más caro del año. SU PLAN: 4 días Disney desde el 3 de ene (AK 3 · MK 4 · HS 6 · EPCOT 7) ≈ $1000 menos que arrancar el 31-dic: NO compran entrada de Nochevieja."},
{t:"🎫 Tu pase ilimitado Universal",d:"CONFIRMADO: tu pase INCLUYE Epic Universe. Verificar 2 cosas: (1) ¿es park-to-park (necesario para Hogwarts Express y para mezclar USF + IoA en un mismo día)? (2) ¿incluye Volcano Bay? Todo lo demás de Universal está cubierto."},
{t:"🏃 runDisney Marathon Weekend",d:"Suele caer ~6-10 ene (confirmar fechas 2027). Carreras de madrugada (4-10 AM) cierran vías cerca de Disney. Espectador = gratis y muy divertido; conducir esos horarios = pesadilla."},
{t:"🎆 Festivales durante el viaje",d:"EPCOT Festival of the Holidays termina ~30 dic y Festival of the Arts empieza 15 ene (confirmado oficial). Del 1-10 ene EPCOT NO tiene festival: sin booths de comida especial. Universal Holidays (Grinchmas + Macy's) ~hasta 3-4 ene (verificar). SeaWorld Christmas ~hasta 3 ene (verificar)."},
{t:"🎵 Conciertos gratis incluidos",d:"EPCOT: Voices of Liberty, Mariachi Cobre, Matsuriza Taiko (todo incluido con entrada). Disney Springs: 3-4 actos en vivo GRATIS cada noche. CityWalk: música gratis fines de semana + la medianoche de NYE GRATIS en la Promenade. NO hay serie de conciertos de EPCOT durante sus fechas (empieza con Festival of the Arts el 15 ene)."},
{t:"🥩 Estrategia proteína/$",d:"Dentro de parques: Thunder Falls (IoA), Spit Fyre (Epic), Satu'li (AK), Flame Tree (AK), Regal Eagle (EPCOT), Cosmic Ray's (MK). Fuera: Cafe Mineiro (rodizio ilimitado ~$30), Bolay, Publix. Regla: bowls y BBQ = máxima proteína por dólar; buffets solo cuando el descanso/experiencia lo justifique."},
{t:"🛍️ Hard discount maestro",d:"Mejor día de compras: MAR 5 ENE (markdowns de enero + outlets vacíos). Prioridad 1: Disney Character Warehouse (Vineland) a la apertura. App SIMON+ = cupones extra gratis. Primark en Florida Mall = ropa baratísima."},
{t:"🏨 Hotel · Endless Summer Dockside",d:"Huéspedes con Early Park Admission (1 h antes de abrir) y shuttles GRATIS cada ~10-15 min a USF, IoA, Epic Universe, CityWalk y Volcano Bay, además de SeaWorld y Aquatica. NO hay shuttle a Disney ni al aeropuerto MCO. Extras: carga a la habitación con la llave y entrega de compras en la habitación."},{t:"⚡ Early Park Admission (EPA)",d:"1 hora antes de abrir en USF, IoA, Epic Universe y Volcano Bay, a discreción de Universal: verificar EN LA APP cada noche qué parque abre temprano. Ministry of Magic NO está en EPA. Llegar a la entrada 30-45 min antes; preguntar en concierge la primera salida del bus (~45-60 min antes de abrir); si no alcanza, Uber corto ~$8-12."},{t:"🚕 Transporte sin auto (Uber/Lyft + shuttles)",d:"Universal/SeaWorld/Volcano Bay = shuttle GRATIS. Disney = 2 Uber/Lyft por trayecto (~$15-30 por vehículo según zona; el estacionamiento de $30 NO aplica a rideshare). Salidas de madrugada (NYE, cierres 22:00+) con surge: pedirlos desde el parque. MCO = Mears Connect o 2 Ubers ≈ $50-70. Destinos fuera de la red de shuttles (KSC, Old Town, Gatorland, Vineland) = 2 Ubers ida+vuelta: sumarlos al costo de la opción."},{t:"🌡️ Clima",d:"Cada día del itinerario muestra su clima: máx/mín, amanecer-ocaso exactos y lluvia típica con horario y mm — son promedios de ESAS fechas en 2022-2026, porque la previsión real no existe hasta 7-10 días antes: re-verificar entonces con una app de clima. En frente frío la sensación nocturna puede bajar a 4-7°C: capas, guantes y cortaviento. Volcano Bay solo si máxima >24°C."},
{t:"📱 Apps imprescindibles (instalar y probar ANTES de volar)",d:"My Disney Experience (entradas, Lightning Lane, mobile order, colas en vivo, mapas) · Universal Orlando (colas, horarios de shows, billetera del pase) · OpenTable (reservas Springs/CityWalk) · MouseDining o TouringPlans Reservation Finder (alertas GRATIS cuando se libera una cena agotada) · Uber Y Lyft instaladas (comparar: difieren hasta 30% por trayecto) · Instacart/Amazon Fresh (agua, snacks y desayuno al hotel) · app de clima con radar · SIMON+ (cupones outlets) · runDisney (rutas de carrera)."},
{t:"💧 Ahorros rápidos para 7",d:"Agua gratis en cualquier QS (pedir vasos de agua, $0) · llevar snacks al parque (permitido) · desayuno del hotel/Publix · 1 mochila compartida para no pagar lockers · souvenirs en Character Warehouse (outlet) no en parques."},
{t:"⏳ Cuenta regresiva de reservas (fechas exactas)",d:"Ver la pestaña 📋 Preparación: tiene la lista interactiva con TODAS las fechas exactas y checkboxes. Resumen: cenas Disney abren 60 días antes (~6 AM ET) → 4-10 nov 2026 · cenas Universal YA reservables en OpenTable · LL Multi Pass solo 3 días antes de cada parque a las 7:00 AM ET (31 dic / 1, 3, 4 ene) · check-in de vuelo el 10 ene."},
{t:"🎒 Mochila de parque en enero",d:"Capas: mañanas de 10-13 °C y tardes de 20-23 °C (camiseta + sudadera + cortaviento por persona). Ponchos ($1 en Walmart vs $12 en el parque), power bank 20.000 mAh (las apps de colas drenan batería), botella recargable (agua gratis en cualquier QS), bloqueador (el sol de Florida quema en invierno), curitas/gel anti-ampollas (días de 15-20 km a pie), snacks propios (permitidos en Disney y Universal), ziplock para celulares en rides acuáticos."},
{t:"🚨 Seguridad y contratiempos",d:"Foto de las 3 niñas cada mañana con la ropa del día + punto de encuentro fijo en cada parque por si alguien se separa. Primeros auxilios GRATIS en todos los parques (también medicinas básicas). Cerca del hotel: Walgreens 24 h en I-Drive (~1.5 mi) y urgent care (Paramount Urgent Care o AdventHealth Centra Care Dr. Phillips, ~10 min en Uber). Avisar el viaje al banco y llevar una tarjeta de respaldo separada del grupo. Si un ride se cae con Lightning Lane comprado, Disney lo convierte en pase 'multi-experience' reutilizable en otras atracciones."},
{t:"💵 Dinero real en Orlando",d:"Propina 18-20% en servicio de mesa (NO incluida: suma $15-25 por cena de 7) · sales tax 6.5% se añade a TODO (los menús muestran precio sin tax) · cajeros dentro de parques cobran $3-4 por retiro · mejor tarjeta sin comisión por divisa; evitar casas de cambio de I-Drive · presupuesto de propinas del viaje completo: ~$150-200."},
{t:"🧳 Compras y maletas",d:"El hard discount del 5 ene puede llenar una maleta entera: llevar un duffel plegable vacío. Verificar franquicia de equipaje del vuelo del 11 ene (una maleta extra documentada suele costar menos que pagar sobrepeso). Disney y Universal guardan las compras para recogerlas a la salida del parque: no cargar bolsas todo el día. Líquidos >100 ml solo en maleta documentada."}
];

/* ---------- VIAJE: fechas clave para la cuenta regresiva ---------- */
const VIAJE = { inicio:"2026-12-31", fin:"2027-01-11" };

/* ---------- VENCIMIENTOS: cada fecha límite real del viaje (orden cronológico) ---------- */
const VENCIMIENTOS = [
 {f:"2026-10-15",label:"Cenas Universal (Toadstool, Mythos, Bigfire) + cena de NYE: YA reservables en OpenTable (60-90 días antes)"},
 {f:"2026-11-01",label:"Comprar las entradas Disney de 4 días (3, 4, 6, 7 ene): precio dinámico, no esperar"},
 {f:"2026-11-04",label:"6:00 AM ET — ADR Disney: cena dom 3 ene en Springs (Homecomin' / The Boathouse)"},
 {f:"2026-11-05",label:"6:00 AM ET — ADR Disney: Liberty Tree Tavern (lun 4 ene, MK)"},
 {f:"2026-11-07",label:"6:00 AM ET — ADR Disney: Sci-Fi Dine-In / 50's Prime Time (mié 6 ene, HS)"},
 {f:"2026-11-08",label:"6:00 AM ET — ADR Disney: Via Napoli / Biergarten (jue 7 ene, EPCOT)"},
 {f:"2026-11-10",label:"6:00 AM ET — ADR Disney: cena de despedida California Grill (dom 10 ene)"},
 {f:"2026-12-21",label:"Ventana de verificación: clima REAL + horarios oficiales de parques (7-10 días antes)"},
 {f:"2026-12-24",label:"Universal publica el schedule oficial de NYE (~24 dic): confirmar la medianoche gratis de CityWalk"},
 {f:"2026-12-31",label:"⚡ 7:00 AM ET — comprar Lightning Lane Multi Pass para AK (3 ene). ¡Es NYE: programar alarma!"},
 {f:"2027-01-01",label:"⚡ 7:00 AM ET — LL Multi Pass para MK (4 ene)"},
 {f:"2027-01-03",label:"⚡ 7:00 AM ET — LL Multi Pass para HS (6 ene)"},
 {f:"2027-01-04",label:"⚡ 7:00 AM ET — LL Multi Pass para EPCOT (7 ene)"},
 {f:"2027-01-10",label:"Check-in online del vuelo del 11 ene (24 h antes) + maletas listas"}
];

/* ---------- PREVIAJE: checklist interactivo (se guarda con checkboxes) ---------- */
const PREVIAJE = [
 {sec:"🍽️ Reservas de cena (marcar al confirmar)",items:[
  {id:"res-nye",t:"Cena NYE 31 dic: Mythos / Toothsome / Bigfire (OpenTable)",w:"YA"},
  {id:"res-toadstool",t:"Toadstool Cafe (Epic Universe, sáb 2 ene)",w:"YA"},
  {id:"res-springs",t:"Homecomin' o The Boathouse (Disney Springs, dom 3 ene)",w:"abre 4 nov"},
  {id:"res-liberty",t:"Liberty Tree Tavern (Magic Kingdom, lun 4 ene)",w:"abre 5 nov"},
  {id:"res-hs",t:"Sci-Fi Dine-In o 50's Prime Time (Hollywood Studios, mié 6 ene)",w:"abre 7 nov"},
  {id:"res-epcot",t:"Via Napoli o Biergarten (EPCOT, jue 7 ene)",w:"abre 8 nov"},
  {id:"res-despedida",t:"Cena de despedida: California Grill o Mythos (dom 10 ene)",w:"abre 10 nov"},
  {id:"res-alertas",t:"Activar alertas MouseDining/TouringPlans para cualquier cena agotada",w:"gratis"}]},
 {sec:"⚡ Compras con fecha exacta",items:[
  {id:"buy-tickets",t:"Entradas Disney 4 días (3, 4, 6, 7 ene) × 7 con tarifa adulta",w:"antes de nov"},
  {id:"buy-ll-ak",t:"Lightning Lane Multi Pass para AK — 7:00 AM ET en punto",w:"31 dic"},
  {id:"buy-ll-mk",t:"Lightning Lane Multi Pass para MK — 7:00 AM ET",w:"1 ene"},
  {id:"buy-ll-hs",t:"Lightning Lane Multi Pass para HS — 7:00 AM ET",w:"3 ene"},
  {id:"buy-ll-epcot",t:"Lightning Lane Multi Pass para EPCOT — 7:00 AM ET",w:"4 ene"}]},
 {sec:"🔍 Verificaciones en apps oficiales",items:[
  {id:"ver-pase",t:"Pase Universal: confirmar si es park-to-park y si incluye Volcano Bay",w:"antes de nov"},
  {id:"ver-rundisney",t:"Fechas oficiales del runDisney Marathon Weekend 2027 (~6-10 ene)",w:"oct-nov"},
  {id:"ver-nye",t:"Schedule oficial de NYE en CityWalk (se publica ~24 dic)",w:"~24 dic"},
  {id:"ver-clima",t:"Clima real + horarios oficiales de todos los parques",w:"7-10 días antes"},
  {id:"ver-epa",t:"Cada noche del viaje: qué parque abre con EPA mañana (app Universal)",w:"en el viaje"}]},
 {sec:"🧳 Documentos y dinero",items:[
  {id:"doc-pass",t:"Pasaportes/visas vigentes de los 7 + copias digitales en la nube",w:""},
  {id:"doc-bank",t:"Avisar el viaje al banco + tarjeta de respaldo guardada aparte",w:""},
  {id:"doc-qr",t:"Capturas offline: entradas, reservas de cena y confirmación del hotel",w:""},
  {id:"doc-seguro",t:"Seguro de viaje/médico vigente (urgent care cercano: Centra Care Dr. Phillips)",w:""},
  {id:"doc-duffel",t:"Duffel plegable vacío en la maleta para las compras del 5 ene",w:""}]},
 {sec:"🎒 Mochila de parque (empacar)",items:[
  {id:"bag-capas",t:"Capas ×7: camiseta + sudadera + cortaviento (mañanas de 10-13 °C)",w:""},
  {id:"bag-ponchos",t:"7 ponchos ($1 en Walmart, no $12 del parque)",w:""},
  {id:"bag-power",t:"Power bank 20.000 mAh + cables (las apps de colas drenan batería)",w:""},
  {id:"bag-botellas",t:"Botellas recargables (agua gratis en cualquier quick-service)",w:""},
  {id:"bag-sol",t:"Bloqueador solar: el sol de Florida quema en invierno",w:""},
  {id:"bag-ampollas",t:"Curitas/gel anti-ampollas: días de 15-20 km a pie",w:""},
  {id:"bag-snacks",t:"Snacks propios (permitidos en Disney y Universal)",w:""},
  {id:"bag-ziplock",t:"Bolsas ziplock para celulares en rides acuáticos",w:""},
  {id:"bag-calor",t:"Hand warmers para NYE y noches de frente frío (4-7 °C)",w:""}]}
];

/* ---------- MAPAS: páginas oficiales de mapas descargables ---------- */
const MAPAS = [
 {name:"Disney World (MK · EPCOT · HS · AK · Springs)",url:"https://disneyworld.disney.go.com/guest-services/downloadable-maps/",note:"Página oficial de mapas PDF descargables de los 4 parques y Disney Springs"},
 {name:"Universal Orlando (USF · IoA · Epic · Volcano Bay)",url:"https://www.universalorlando.com/web/en/us/plan-your-visit/park-maps",note:"Mapas oficiales de los 4 parques y CityWalk"},
 {name:"SeaWorld Orlando",url:"https://seaworld.com/orlando/park-info/park-map/",note:"Mapa oficial del parque (día alternativo del 9 ene)"}
];

/* ---------- PRESUPUESTO: estimaciones editables (montos = TOTAL del grupo) ---------- */
const PRESUPUESTO = [
 {sec:"🎟️ Entradas y pases",items:[
  {id:"p-tickets",label:"Entradas Disney 4 días × 7 (todos pagan tarifa adulta)",amt:4900,note:"Rango $144-209 pp/día: AK+MK+HS+EPCOT ≈ $4,500-5,400 en fecha alta"},
  {id:"p-ll",label:"Lightning Lane Multi Pass (~$30-40 pp por día elegido)",amt:700,note:"Los 4 días Disney ≈ $840-1,120 · 0 si van sin LL y usan las estrategias de rope drop"},
  {id:"p-uni",label:"Pase ilimitado Universal (incluye Epic Universe)",amt:0,note:"Ya comprado — dejar en 0 si está pagado"},
  {id:"p-disney5",label:"Opcional: 5° día Disney si la votación del 10 ene sale Disney",amt:0,note:"≈ $144-209 pp × 7 ≈ $1,000-1,460: solo con el presupuesto aprobado"}]},
 {sec:"🍗 Comida (7 personas × 12 días)",items:[
  {id:"p-food",label:"Comidas del grupo (quick-service + 1 cena de mesa por día)",amt:3100,note:"~$260/día mezclando QS proteicos (Satu'li, Flame Tree, Regal Eagle) y las cenas reservadas"},
  {id:"p-propinas",label:"Propinas 18-20% (NO incluidas en los menús)",amt:200,note:"~$15-25 por cena de mesa × ~9 cenas"}]},
 {sec:"🚕 Transporte (sin auto)",items:[
  {id:"p-uber-disney",label:"Ubers de los 4 días Disney (ida y vuelta)",amt:400,note:"2 vehículos × ~$20-30 por trayecto × 4 días"},
  {id:"p-uber-extra",label:"MCO aeropuerto + outlets 5 ene + Old Town 9 ene + buffer de surge",amt:260,note:"MCO ≈ $50-70 · outlets ≈ $50 · Old Town ≈ $60-80 · buffer NYE ≈ $40"}]},
 {sec:"🛍️ Compras e imprevistos",items:[
  {id:"p-shopping",label:"Compras y souvenirs (hard discount del 5 ene)",amt:800,note:"Regla de oro: solo ≥40% de descuento sobre precio normal"},
  {id:"p-buffer",label:"Imprevistos (~5%)",amt:400,note:"Farmacia, lluvia inesperada, lockers, antojos"}]}
];
/* ---------- v7: AHORRO INTELIGENTE · programas, suscripciones y bundles que bajan costos SIN bajar calidad ---------- */
const AHORRO = [
 {sec:"🎟️ Entradas y parques — el ahorro más grande del viaje",items:[
  {id:"sv-undercover",prog:"Undercover Tourist / Get Away Today",costo:"Gratis registrarse",save:200,url:"https://www.undercovertourist.com/orlando/",d:"Reseller AUTORIZADO por Disney y Universal: tickets ~$5-40 más baratos por persona que en taquilla, a veces con días extra gratis. Para sus 28 tickets Disney (7×4 días) el ahorro real es $150-280. Comparar contra el precio oficial el mismo día y comprar 30+ días antes."},
  {id:"sv-giftcards",prog:"Gift cards con descuento: Sam's Club / Costco / BJ's",costo:"Membresía ~$50-60/año",save:250,url:"https://www.samsclub.com/",d:"Estos clubs venden tarjetas regalo de Disney y Universal con 3-8% de descuento. Estrategia: comprar gift cards y pagar con ellas entradas, comida y merch DENTRO de los parques. Sobre $5,000-7,000 de gasto Disney son $200-390 de ahorro. La membresía se paga sola en la primera compra; comprar en tienda al llegar u online con PayPal."},
  {id:"sv-ofertas",prog:"Special Offers oficial de Disney",costo:"Gratis",save:100,url:"https://disneyworld.disney.go.com/special-offers/",d:"Disney publica promos de temporada para enero (la semana post-Navidad es de las más baratas del año): revisar en noviembre, durante Cyber Week y 60 días antes. Si aparece descuento de tickets para sus fechas, se combina con las gift cards con descuento."},
  {id:"sv-freestyle",prog:"Vaso refillable de Universal (Freestyle Cup)",costo:"~$18 el primer día",save:60,url:"https://www.universalorlando.com/web/en/us/things-to-do/dining",d:"7 personas tomando agua/gaseosa a $5-6 por botella = $100+ por día. El vaso se recarga en las máquinas Freestyle de todo el resort por ~$1-2 (y el agua de grifo es gratis en cualquier quick-service). Comprar 2-3 vasos y rotarlos."},
  {id:"sv-groupon",prog:"Groupon Orlando (atracciones de I-Drive)",costo:"Gratis",save:80,url:"https://www.groupon.com/local/orlando/things-to-do",d:"Fun Spot, WonderWorks, Chocolate Kingdom, mini-golf y atracciones de International Drive salen con 20-45% de descuento. Nunca pagar precio de puerta en I-Drive: revisar Groupon la noche anterior al día libre."}
 ]},
 {sec:"☕ Apps de comida y café — registro gratis, recompensa inmediata",items:[
  {id:"sv-starbucks",prog:"Starbucks Rewards",costo:"Gratis",save:40,url:"https://www.starbucks.com/rewards",d:"Refills GRATIS de café y té durante la misma visita (clave con 7 personas en las mañanas frías de enero), stars que se convierten en bebidas gratis (~1 de cada 10) y bebida de cumpleaños gratis. Cargar $25 en la app paga 2× en stars vs pagar directo."},
  {id:"sv-mcdonalds",prog:"App de McDonald's (deals diarios)",costo:"Gratis",save:30,url:"https://www.mcdonalds.com/us/en-us/download-app.html",d:"Ofertas solo-app: papas $1, BOGO de sandwiches, combos de desayuno baratos. Los desayunos de McDonald's/I-Drive antes del parque son la comida más barata del viaje: la app los baja otro 20-30%."},
  {id:"sv-chipotle",prog:"Chipotle Rewards",costo:"Gratis",save:15,url:"https://www.chipotle.com/rewards",d:"El almuerzo proteico del día de outlets: cada compra suma puntos hacia un entrée gratis. Pedir TODO en una sola cuenta concentra los puntos de los 7. Pedir online y recoger evita la fila de las 13:00."},
  {id:"sv-krispy",prog:"Krispy Kreme Rewards",costo:"Gratis",save:15,url:"https://www.krispykreme.com/rewards",d:"Dona gratis solo por registrarse (si cada adulto registra su correo = media docena gratis), ofertas de docena a mitad de precio los viernes y puntos por compra. El snack viral más barato del viaje."}
 ]},
 {sec:"🛍️ Outlets y compras — apilar descuentos sobre el clearance de enero",items:[
  {id:"sv-simon",prog:"SIMON+ / VIP Shopper Club (Premium Outlets)",costo:"Gratis",save:80,url:"https://www.premiumoutlets.com/vip",d:"Vineland e International Premium Outlets son SIMON: el registro gratis da el libro de cupones digital con 10-25% extra en ~100 tiendas, APILABLE sobre el clearance post-navidad. Es el paso #1 del día 5 ene, antes de pisar la primera tienda."},
  {id:"sv-rakuten",prog:"Rakuten / TopCashback",costo:"Gratis",save:30,url:"https://www.rakuten.com/",d:"Cashback del 2-10% comprando online con recogida en tienda (Nike, Under Armour, shoe stores): ordenar desde el hotel, recoger en el outlet sin fila y encima devuelven dinero. Funciona también para reservar atracciones y hoteles."}
 ]},
 {sec:"🥪 Supermercado y esenciales",items:[
  {id:"sv-publix",prog:"Club Publix",costo:"Gratis",save:60,url:"https://www.publix.com/savings/club-publix",d:"Cupones digitales y los famosos BOGO (compra 1, lleva 2) en agua, snacks, frutas y desayunos. El plan económico de NYE y los desayunos del hotel salen de aquí: 12 días × 7 personas de snacks propios vs parque = el ahorro más constante del viaje."},
  {id:"sv-walmart",prog:"App de Walmart (rollbacks + Walmart Cash)",costo:"Gratis",save:20,url:"https://www.walmart.com/",d:"Los ponchos de $1, botellas, capas de ropa para el frío y power banks: la app muestra rollbacks locales y devuelve Walmart Cash en productos marcados. Una sola pasada antes del 31 cubre la lista de empacar."}
 ]},
 {sec:"🚕 Transporte y hotel",items:[
  {id:"sv-uberone",prog:"Uber One (1 solo mes)",costo:"$9.99/mes",save:30,url:"https://www.uber.com/us/en/uber-one/",d:"~6% de vuelta en Uber Cash en cada viaje + prioridad que reduce el surge. Con ~$660 de Ubers presupuestados (Disney, aeropuerto, outlets) el mes del viaje devuelve ~$40: activar SOLO el mes del viaje y cancelar al volver."},
  {id:"sv-onekey",prog:"One Key (Expedia / Hotels.com / VRBO)",costo:"Gratis",save:30,url:"https://www.expedia.com/onekey",d:"2% de vuelta en OneKeyCash en hoteles y actividades reservadas por sus portales. Si reservan noches extra, el carro del 5 ene o atracciones por Expedia, el crédito queda para el próximo viaje."},
  {id:"sv-epa",prog:"Perks del hotel Universal (EPA ya incluido)",costo:"Ya incluido",save:0,url:"",d:"Hospedarse en Endless Summer YA incluye Early Park Admission: entrar 1 hora antes a los parques equivale a un Lightning Lane gratis en Universal. Calidad premium sin pagar premium: madrugar es su único 'pago'."}
 ]},
 {sec:"💳 Pagos — el ahorro invisible (evitar fugas)",items:[
  {id:"sv-ftf",prog:"Tarjeta sin comisión internacional (0% FTF)",costo:"Gratis verificar",save:180,url:"",d:"Muchas tarjetas cobran 3% por compras en el extranjero: sobre ~$6,000 de gasto con tarjeta son $180 PERDIDOS sin recibir nada. Verificar con el banco ANTES de viajar y llevar una tarjeta 0% FTF o cuenta en USD. Además: SIEMPRE pagar en dólares — si la terminal pregunta por pagar en tu moneda, decir NO (la conversión dinámica DCC cuesta 4-8% extra)."}
 ]}
];


/* ---------- v5: RESERVAS · página oficial de cada restaurante de mesa (abrir en el celular) ---------- */
const RES_URLS = {
 r3:"https://www.universalorlando.com/web/en/us/things-to-do/dining/mythos",
 r6:"https://www.universalorlando.com/web/en/us/things-to-do/dining/toadstool-cafe",
 r9:"https://www.universalorlando.com/web/en/us/things-to-do/dining/bigfire-american-fare",
 r10:"https://www.universalorlando.com/web/en/us/things-to-do/dining/nbc-sports-grill-and-brew",
 r11:"https://www.universalorlando.com/web/en/us/things-to-do/dining/antojitos-authentic-mexican-food",
 r12:"https://www.universalorlando.com/web/en/us/things-to-do/dining/the-cowfish-sushi-burger-bar",
 r47:"https://www.universalorlando.com/web/en/us/things-to-do/dining/the-toothsome-chocolate-emporium-and-savory-feast-kitchen",
 r48:"https://www.universalorlando.com/web/en/us/things-to-do/dining/vivo-italian-kitchen",
 r21:"https://disneyworld.disney.go.com/dining/epcot/via-napoli-ristorante-e-pizzeria/",
 r22:"https://disneyworld.disney.go.com/dining/epcot/biergarten-restaurant/",
 r23:"https://disneyworld.disney.go.com/dining/epcot/garden-grill-restaurant/",
 r24:"https://disneyworld.disney.go.com/dining/epcot/rose-and-crown-dining-room/",
 r25:"https://disneyworld.disney.go.com/dining/magic-kingdom/liberty-tree-tavern/",
 r26:"https://disneyworld.disney.go.com/dining/magic-kingdom/be-our-guest-restaurant/",
 r27:"https://disneyworld.disney.go.com/dining/magic-kingdom/cinderellas-royal-table/",
 r28:"https://disneyworld.disney.go.com/dining/animal-kingdom/tusker-house-restaurant/",
 r29:"https://disneyworld.disney.go.com/dining/hollywood-studios/sci-fi-dine-in-theater-restaurant/",
 r30:"https://disneyworld.disney.go.com/dining/hollywood-studios/50s-prime-time-cafe/",
 r33:"https://disneyworld.disney.go.com/dining/disney-springs/homecomin/",
 r34:"https://disneyworld.disney.go.com/dining/disney-springs/the-boathouse/",
 r35:"https://disneyworld.disney.go.com/dining/disney-springs/raglan-road-irish-pub/",
 r36:"https://disneyworld.disney.go.com/dining/disney-springs/morimoto-asia/",
 r37:"https://disneyworld.disney.go.com/dining/disney-springs/wine-bar-george/",
 r38:"https://disneyworld.disney.go.com/dining/disney-springs/jaleo/"
};

/* ---------- v5: COMIDA POR DÍA · mejores restaurantes del parque que toca (ids de COMIDA) ---------- */
const COMIDA_DIA = {
 "2026-12-31":["r2","r1","r3","r57","r9","r47","r13","r58"],
 "2027-01-01":["r43","r31","r32","r60","r61","r33"],
 "2027-01-02":["r4","r5","r6","r59"],
 "2027-01-03":["r14","r15","r28","r55","r33"],
 "2027-01-04":["r17","r18","r25","r26","r27","r49","r50","r51"],
 "2027-01-05":["r40","r41","r39","r45"],
 "2027-01-06":["r19","r20","r29","r30","r54"],
 "2027-01-07":["r16","r21","r22","r23","r24","r52","r53"],
 "2027-01-08":["r1","r2","r3","r57","r58"],
 "2027-01-09":["r7","r8","r56","r11","r42"],
 "2027-01-10":["r3","r9","r47"],
 "2027-01-11":["r43"]
};

