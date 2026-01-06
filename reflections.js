const reflections = [
  {
  quote: "“No nos afecta lo que nos sucede, sino lo que nos decimos sobre lo que nos sucede.”",
  author: "— Epicteto",
  explanation: "Nuestra interpretación crea sufrimiento o paz; entrenar la mente es entrenar la vida.",
  question: "¿Qué interpretación alternativa te daría más serenidad hoy?"
  },
  {
  quote: "“La riqueza consiste más en el disfrute que en la posesión.”",
  author: "— Epicteto",
  explanation: "Apreciar lo que tienes reduce el deseo y aumenta la calma.",
  question: "¿Qué puedes apreciar ahora mismo que ya tienes?"
  },
  {
  quote: "“El hombre sabio se adapta a las circunstancias.”",
  author: "— Séneca",
  explanation: "La flexibilidad mental evita la frustración ante lo inevitable.",
  question: "¿Dónde puedes ceder sin perder tus valores?"
  },
  {
  quote: "“No es la muerte lo que debemos temer, sino nunca comenzar a vivir.”",
  author: "— Marco Aurelio",
  explanation: "El miedo nos paraliza, pero la vida comienza cuando decidimos actuar con valentía.",
  question: "¿Qué acción sencilla podrías hacer hoy para sentirte más vivo?"
  },
  {
  quote: "“La verdadera libertad es poder dominarse a sí mismo.”",
  author: "— Epicteto",
  explanation: "La autodisciplina nos libera de ser esclavos de los impulsos y emociones pasajeras.",
  question: "¿Qué hábito podrías fortalecer para ganar más libertad interior?"
  },
  {
  quote: "“La vida es muy corta y ansiosa para quienes olvidan el pasado, descuidan el presente y temen el futuro.”",
  author: "— Séneca",
  explanation: "La plenitud se encuentra en el presente, no en la nostalgia ni en la preocupación.",
  question: "¿Qué momento presente puedes abrazar con más atención ahora mismo?"
  },
  {
  quote: "“La felicidad depende de la calidad de tus pensamientos.”",
  author: "— Marco Aurelio",
  explanation: "Cultivar pensamientos claros y nobles es sembrar paz en la mente y en la vida.",
  question: "¿Qué pensamiento positivo puedes elegir sostener hoy?"
  },
  {
  quote: "“No es libre quien es esclavo de sus deseos.”",
  author: "— Séneca",
  explanation: "El deseo sin control nos ata; la moderación nos devuelve la libertad auténtica.",
  question: "¿Qué deseo podrías moderar para sentirte más libre?"
  },
  {
  quote: "“El hombre sufre más por la imaginación que por la realidad.”",
  author: "— Séneca",
  explanation: "La mente exagera los problemas; aprender a distinguir lo real de lo imaginado nos da paz.",
  question: "¿Qué preocupación tuya es más imaginaria que real?"
  },
  {
  quote: "“La mejor venganza es no parecerse a quien te hizo daño.”",
  author: "— Marco Aurelio",
  explanation: "Responder con virtud en lugar de imitar el mal nos eleva y nos protege del resentimiento.",
  question: "¿Cómo puedes responder con nobleza ante una herida reciente?"
  },
  {
  quote: "“La dificultad muestra lo que somos.”",
  author: "— Marco Aurelio",
  explanation: "Las pruebas revelan nuestro carácter y nos dan la oportunidad de crecer en virtud.",
  question: "¿Qué dificultad reciente te está mostrando tu verdadera fortaleza?"
  },
  {
  quote: "“No es que tengamos poco tiempo, sino que perdemos mucho.”",
  author: "— Séneca",
  explanation: "El tiempo es suficiente si lo usamos con conciencia y no lo desperdiciamos en lo trivial.",
  question: "¿En qué actividad podrías invertir tu tiempo hoy para que tenga más sentido?"
  },
  {
  quote: "“El hombre sabio no se aflige por lo que no tiene, sino que se alegra por lo que tiene.”",
  author: "— Epicteto",
  explanation: "La gratitud es la raíz de la serenidad y nos libera de la insatisfacción constante.",
  question: "¿Qué tienes ahora mismo que merece tu gratitud?"
  },
  {
  quote: "“La tranquilidad perfecta consiste en el buen orden de la mente.”",
  author: "— Marco Aurelio",
  explanation: "La paz no depende de lo externo, sino de la armonía interior que cultivamos día a día.",
  question: "¿Qué pensamiento podrías ordenar para sentir más calma?"
  },
  {
  quote: "“El hombre que sufre antes de lo necesario, sufre más de lo necesario.”",
  author: "— Séneca",
  explanation: "Anticipar el dolor multiplica el sufrimiento; vivir el presente reduce la carga emocional.",
  question: "¿Qué preocupación futura podrías dejar de cargar hoy?"
  },
  {
  quote: "“No busques que las cosas ocurran como tú quieres, sino quiere que ocurran como ocurren.”",
  author: "— Epicteto",
  explanation: "Aceptar la realidad tal cual es nos libera de la frustración y nos acerca a la serenidad.",
  question: "¿Qué situación podrías aceptar en lugar de resistir?"
  },
  {
  quote: "“El hombre noble se avergüenza de que sus palabras sean mejores que sus actos.”",
  author: "— Confucio (inspiración estoica)",
  explanation: "La coherencia entre lo que decimos y lo que hacemos es la base de la integridad.",
  question: "¿Dónde puedes alinear tus palabras con tus acciones?"
  },
  {
  quote: "“Si quieres mejorar, conténtate con que te consideren tonto e ignorante.”",
  author: "— Epicteto",
  explanation: "El crecimiento requiere humildad y disposición a aprender sin miedo al juicio ajeno.",
  question: "¿En qué área aceptarías ser aprendiz para crecer más?"
  },
  {
  quote: "“El hombre que ha vivido un día ha vivido toda la vida.”",
  author: "— Séneca",
  explanation: "Cada día contiene la esencia de la existencia: alegría, dolor, esperanza y aprendizaje.",
  question: "¿Qué parte de tu día refleja la totalidad de tu vida?"
  },
  {
  quote: "“La verdadera medida de la riqueza es cuánto valoras lo que tienes.”",
  author: "— Marco Aurelio",
  explanation: "La abundancia no depende de la cantidad, sino de la percepción consciente de lo que poseemos.",
  question: "¿Qué posesión o relación valoras más allá de su precio?"
  },
  {
  quote: "“El hombre que ha dominado su ira ha vencido a su peor enemigo.”",
  author: "— Séneca",
  explanation: "La ira nos esclaviza; aprender a controlarla nos devuelve la libertad interior.",
  question: "¿Qué situación reciente podrías enfrentar con calma en lugar de ira?"
  },
  {
  quote: "“No es la fortuna la que nos hace sabios o necios, sino nuestra actitud hacia ella.”",
  author: "— Epicteto",
  explanation: "La fortuna cambia, pero nuestra respuesta define nuestra sabiduría.",
  question: "¿Cómo puedes responder con serenidad ante lo inesperado?"
  },
  {
  quote: "“El hombre que teme sufrir ya sufre lo que teme.”",
  author: "— Montaigne (inspiración estoica)",
  explanation: "El miedo anticipado multiplica el dolor; vivir el presente reduce la carga emocional.",
  question: "¿Qué temor podrías soltar para aliviar tu mente?"
  },
  {
  quote: "“La naturaleza nos ha dado una lengua y dos oídos para escuchar más y hablar menos.”",
  author: "— Epicteto",
  explanation: "Escuchar con atención nos acerca a la sabiduría y fortalece nuestras relaciones.",
  question: "¿A quién podrías escuchar con más atención hoy?"
  },
  {
  quote: "“La vida feliz es aquella que está en conformidad con su naturaleza.”",
  author: "— Séneca",
  explanation: "Vivir de acuerdo con nuestra esencia nos da paz y autenticidad.",
  question: "¿Qué parte de tu naturaleza auténtica puedes honrar hoy?"
  },
  {
  quote: "“El hombre que vive en armonía consigo mismo vive en armonía con el universo.”",
  author: "— Marco Aurelio",
  explanation: "La paz interior se refleja en nuestra relación con el mundo.",
  question: "¿Qué gesto pequeño te ayudaría a sentir más armonía contigo mismo?"
  },
  {
  quote: "“No es la muerte lo que debemos lamentar, sino no haber vivido con virtud.”",
  author: "— Marco Aurelio",
  explanation: "La vida se mide por la calidad de nuestras acciones, no por su duración.",
  question: "¿Qué acción virtuosa puedes realizar hoy?"
  },
  {
  quote: "“El hombre que busca la sabiduría debe aprender a desaprender.”",
  author: "— Epicteto",
  explanation: "Soltar creencias limitantes abre espacio para nuevas verdades.",
  question: "¿Qué idea vieja podrías dejar atrás para crecer?"
  },
  {
  quote: "“La mayor riqueza es contentarse con poco.”",
  author: "— Platón (inspiración estoica)",
  explanation: "La simplicidad nos libera del peso del exceso y nos acerca a la paz.",
  question: "¿Qué cosa sencilla te da alegría sin necesidad de más?"
  },
  {
  quote: "“El hombre que se domina a sí mismo no puede ser dominado por nadie.”",
  author: "— Séneca",
  explanation: "La verdadera fuerza está en el autocontrol, no en el poder externo.",
  question: "¿En qué aspecto de tu vida puedes practicar más autocontrol?"
  },
  {
  quote: "“El hombre que se enoja por las cosas que no puede controlar se condena a sí mismo.”",
  author: "— Epicteto",
  explanation: "La frustración surge de querer dominar lo que está fuera de nuestro alcance.",
  question: "¿Qué situación aceptarías hoy para liberarte de la frustración?"
  },
  {
  quote: "“La vida no es corta, sino que nosotros la hacemos corta al desperdiciarla.”",
  author: "— Séneca",
  explanation: "El tiempo se vuelve escaso cuando lo gastamos en lo que no importa.",
  question: "¿Qué actividad podrías dejar de lado para aprovechar mejor tu tiempo?"
  },
  {
  quote: "“El hombre que busca la sabiduría debe aprender a vivir con sencillez.”",
  author: "— Marco Aurelio",
  explanation: "La simplicidad abre espacio para la claridad y la paz interior.",
  question: "¿Qué aspecto de tu vida podrías simplificar hoy?"
  },
  {
  quote: "“No es la fortuna la que nos hace felices, sino nuestra actitud hacia ella.”",
  author: "— Epicteto",
  explanation: "La felicidad depende de cómo interpretamos lo que nos toca vivir.",
  question: "¿Qué acontecimiento reciente podrías reinterpretar con gratitud?"
  },
  {
  quote: "“El hombre que se domina a sí mismo es invencible.”",
  author: "— Séneca",
  explanation: "La verdadera fuerza está en el autocontrol, no en el poder externo.",
  question: "¿En qué área de tu vida necesitas más dominio propio?"
  },
  {
  quote: "“La vida es como una obra de teatro: lo importante no es cuánto dura, sino cómo se actúa.”",
  author: "— Séneca",
  explanation: "La calidad de nuestras acciones da sentido a la vida, más allá de su duración.",
  question: "¿Qué acto noble podrías realizar hoy para dar más sentido a tu vida?"
  },
  {
  quote: "“El hombre sabio no se deja perturbar por lo que no depende de él.”",
  author: "— Epicteto",
  explanation: "La serenidad surge al distinguir entre lo que controlamos y lo que no.",
  question: "¿Qué preocupación podrías soltar porque no depende de ti?"
  },
  {
  quote: "“La mayor victoria es la que se gana sobre uno mismo.”",
  author: "— Marco Aurelio",
  explanation: "Superar nuestras debilidades es más valioso que vencer a otros.",
  question: "¿Qué debilidad personal podrías trabajar hoy para crecer?"
  },
  {
  quote: "“El hombre que vive con virtud nunca está en soledad.”",
  author: "— Séneca",
  explanation: "La virtud nos conecta con lo más profundo de la existencia y nos acompaña siempre.",
  question: "¿Qué virtud puedes practicar hoy para sentir compañía interior?"
  },
  {
  quote: "“No es la riqueza lo que nos hace libres, sino la moderación.”",
  author: "— Epicteto",
  explanation: "La libertad surge de necesitar menos, no de poseer más.",
  question: "¿Qué deseo podrías moderar para sentirte más libre?"
  },
  {
  quote: "“El hombre sabio se contenta con lo que tiene.”",
  author: "— Epicteto",
  explanation: "La serenidad nace de aceptar lo que ya está presente en nuestra vida.",
  question: "¿Qué cosa que ya tienes podrías valorar más hoy?"
  },
  {
  quote: "“La vida es como un río: no puedes detener su curso, pero sí aprender a navegarlo.”",
  author: "— Marco Aurelio",
  explanation: "Aceptar el flujo de la vida nos permite avanzar con menos resistencia.",
  question: "¿Qué corriente de tu vida podrías aceptar en lugar de luchar contra ella?"
  },
  {
  quote: "“El hombre que se preocupa por lo que no depende de él pierde su libertad.”",
  author: "— Séneca",
  explanation: "La libertad se encuentra en enfocar la energía en lo que sí podemos controlar.",
  question: "¿Qué preocupación podrías soltar porque no depende de ti?"
  },
  {
  quote: "“No es la riqueza lo que nos hace felices, sino la virtud.”",
  author: "— Epicteto",
  explanation: "La felicidad auténtica surge de vivir con rectitud y coherencia.",
  question: "¿Qué acción virtuosa puedes practicar hoy para sentir más plenitud?"
  },
  {
  quote: "“El hombre que teme la pobreza nunca será rico.”",
  author: "— Séneca",
  explanation: "El miedo a perder nos impide disfrutar lo que ya tenemos.",
  question: "¿Qué miedo podrías soltar para sentir más abundancia?"
  },
  {
  quote: "“La vida es breve, pero suficiente si se vive con sabiduría.”",
  author: "— Marco Aurelio",
  explanation: "La calidad de la vida no depende de su duración, sino de cómo la vivimos.",
  question: "¿Qué decisión consciente puedes tomar hoy para vivir con más sabiduría?"
  },
  {
  quote: "“El hombre que se domina a sí mismo nunca será esclavo.”",
  author: "— Epicteto",
  explanation: "El autocontrol nos libera de las cadenas de los impulsos y deseos.",
  question: "¿En qué aspecto de tu vida puedes practicar más autocontrol?"
  },
  {
  quote: "“No es la muerte lo que debemos temer, sino una vida sin propósito.”",
  author: "— Marco Aurelio",
  explanation: "El sentido de la vida se encuentra en vivir con propósito y virtud.",
  question: "¿Qué propósito pequeño podrías honrar hoy?"
  },
  {
  quote: "“El hombre sabio no busca la fama, sino la paz interior.”",
  author: "— Séneca",
  explanation: "La verdadera grandeza está en la calma del espíritu, no en el reconocimiento externo.",
  question: "¿Qué acción podrías hacer hoy para cultivar tu paz interior?"
  },
  {
  quote: "“La libertad no consiste en hacer lo que quieras, sino en querer lo que haces.”",
  author: "— Epicteto",
  explanation: "La verdadera libertad surge de alinear nuestras acciones con nuestros valores.",
  question: "¿Qué actividad cotidiana podrías transformar en un acto de libertad?"
  },
  {
  quote: "“El hombre sabio no se deja llevar por la opinión de la multitud.”",
  author: "— Séneca",
  explanation: "La verdad no depende de la mayoría, sino de la razón y la virtud.",
  question: "¿En qué aspecto de tu vida puedes mantener tu criterio aunque otros piensen distinto?"
  },
  {
  quote: "“No es la fortuna la que nos hace libres, sino la virtud.”",
  author: "— Epicteto",
  explanation: "La verdadera libertad surge de vivir de acuerdo con nuestros valores más profundos.",
  question: "¿Qué valor personal puedes honrar hoy para sentirte más libre?"
  },
  {
  quote: "“El hombre que se domina a sí mismo nunca será derrotado.”",
  author: "— Marco Aurelio",
  explanation: "La victoria más grande es la que logramos sobre nuestras propias pasiones y debilidades.",
  question: "¿Qué impulso podrías controlar hoy para sentirte más fuerte?"
  },
  {
  quote: "“La vida es un viaje, no una carga.”",
  author: "— Séneca",
  explanation: "Ver la vida como un camino de aprendizaje nos libera del peso de la obligación.",
  question: "¿Qué parte de tu vida podrías ver como aprendizaje en lugar de carga?"
  },
  {
  quote: "“No es la riqueza lo que nos hace grandes, sino la virtud.”",
  author: "— Epicteto",
  explanation: "La grandeza auténtica se mide por la rectitud de nuestras acciones, no por nuestras posesiones.",
  question: "¿Qué acción virtuosa podrías realizar hoy para sentirte más grande?"
  },
  {
  quote: "“El hombre sabio no se deja perturbar por lo que no depende de él.”",
  author: "— Marco Aurelio",
  explanation: "La serenidad surge al distinguir entre lo que controlamos y lo que no.",
  question: "¿Qué preocupación podrías soltar porque está fuera de tu control?"
  },
  {
  quote: "“La vida es suficiente para quien sabe usarla.”",
  author: "— Séneca",
  explanation: "El tiempo bien aprovechado nos da plenitud, sin importar su duración.",
  question: "¿Qué momento de hoy puedes aprovechar mejor para darle sentido a tu vida?"
  },
  {
  quote: "“El hombre que busca la sabiduría aprende a vivir con calma.”",
  author: "— Epicteto",
  explanation: "La calma es fruto de la reflexión y del dominio de uno mismo.",
  question: "¿Qué hábito pequeño podrías cultivar para sentir más calma?"
  },
  {
  quote: "“No es la muerte lo que debemos temer, sino una vida sin virtud.”",
  author: "— Marco Aurelio",
  explanation: "La vida cobra sentido cuando se vive con rectitud y propósito.",
  question: "¿Qué decisión virtuosa puedes tomar hoy para dar más sentido a tu vida?"
  },
  {
  quote: "“El hombre sabio se adapta a lo inevitable.”",
  author: "— Séneca",
  explanation: "Aceptar lo que no podemos cambiar nos libera del sufrimiento inútil.",
  question: "¿Qué situación inevitable podrías aceptar con más serenidad?"
  },
  {
  quote: "“El hombre que se preocupa por lo que no puede cambiar se roba a sí mismo la paz.”",
  author: "— Epicteto",
  explanation: "La serenidad surge al aceptar lo inevitable y enfocar la energía en lo que sí depende de nosotros.",
  question: "¿Qué situación aceptarías hoy para recuperar tu paz interior?"
  },
  {
  quote: "“La vida es suficiente para quien sabe vivirla con virtud.”",
  author: "— Marco Aurelio",
  explanation: "La virtud da sentido a cada instante, sin importar su duración.",
  question: "¿Qué acción virtuosa puedes realizar hoy para dar más sentido a tu vida?"
  },
  {
  quote: "“El hombre sabio no se deja dominar por la ira ni por el miedo.”",
  author: "— Séneca",
  explanation: "La libertad interior se alcanza al dominar las emociones más intensas.",
  question: "¿Qué emoción podrías observar con calma en lugar de dejarte arrastrar por ella?"
  },
  {
  quote: "“No es la riqueza lo que nos hace libres, sino la moderación.”",
  author: "— Epicteto",
  explanation: "La moderación nos libera de la esclavitud del deseo constante.",
  question: "¿Qué deseo podrías moderar hoy para sentirte más libre?"
  },
  {
  quote: "“El hombre que vive en armonía con la naturaleza nunca se siente pobre.”",
  author: "— Marco Aurelio",
  explanation: "La conexión con la naturaleza nos recuerda que ya tenemos lo esencial.",
  question: "¿Qué aspecto de la naturaleza puedes apreciar hoy para sentir abundancia?"
  },
  {
  quote: "“La vida es breve, pero suficiente si se vive con sabiduría.”",
  author: "— Séneca",
  explanation: "El tiempo cobra valor cuando lo usamos en lo que realmente importa.",
  question: "¿Qué decisión consciente puedes tomar hoy para vivir con más sabiduría?"
  },
  {
  quote: "“El hombre sabio no busca la fama, sino la paz interior.”",
  author: "— Epicteto",
  explanation: "La verdadera grandeza está en la calma del espíritu, no en el reconocimiento externo.",
  question: "¿Qué acción podrías hacer hoy para cultivar tu paz interior?"
  },
  {
  quote: "“No es la muerte lo que debemos temer, sino una vida sin propósito.”",
  author: "— Marco Aurelio",
  explanation: "El sentido de la vida se encuentra en vivir con propósito y virtud.",
  question: "¿Qué propósito pequeño podrías honrar hoy?"
  },
  {
  quote: "“El hombre que se domina a sí mismo nunca será esclavo.”",
  author: "— Séneca",
  explanation: "El autocontrol nos libera de las cadenas de los impulsos y deseos.",
  question: "¿En qué aspecto de tu vida puedes practicar más autocontrol?"
  },
  {
  quote: "“La mayor victoria es la que se gana sobre uno mismo.”",
  author: "— Epicteto",
  explanation: "Superar nuestras debilidades es más valioso que vencer a otros.",
  question: "¿Qué debilidad personal podrías trabajar hoy para crecer?"
  },
  {
  quote: "“El hombre sabio no se deja esclavizar por el deseo.”",
  author: "— Epicteto",
  explanation: "La moderación nos libera de la dependencia y nos acerca a la verdadera libertad.",
  question: "¿Qué deseo podrías moderar hoy para sentirte más ligero?"
  },
  {
  quote: "“La vida es corta, pero suficiente si se vive con virtud.”",
  author: "— Marco Aurelio",
  explanation: "La virtud da sentido a cada instante, sin importar su duración.",
  question: "¿Qué acto virtuoso puedes realizar hoy para honrar tu vida?"
  },
  {
  quote: "“El hombre que se domina a sí mismo nunca será vencido.”",
  author: "— Séneca",
  explanation: "La victoria más grande es la que logramos sobre nuestras pasiones y debilidades.",
  question: "¿Qué impulso podrías controlar hoy para sentirte más fuerte?"
  },
  {
  quote: "“No es la riqueza lo que nos hace felices, sino la gratitud.”",
  author: "— Epicteto",
  explanation: "La gratitud transforma lo que tenemos en suficiente y nos libera del deseo constante.",
  question: "¿Qué cosa sencilla puedes agradecer ahora mismo?"
  },
  {
  quote: "“El hombre sabio no se deja perturbar por lo inevitable.”",
  author: "— Marco Aurelio",
  explanation: "Aceptar lo que no podemos cambiar nos libera del sufrimiento inútil.",
  question: "¿Qué situación inevitable podrías aceptar con más serenidad?"
  },
  {
  quote: "“La vida es como una obra de teatro: lo importante no es cuánto dura, sino cómo se actúa.”",
  author: "— Séneca",
  explanation: "La calidad de nuestras acciones da sentido a la vida, más allá de su duración.",
  question: "¿Qué acción noble podrías realizar hoy para dar más sentido a tu vida?"
  },
  {
  quote: "“El hombre que busca la sabiduría aprende a desaprender.”",
  author: "— Epicteto",
  explanation: "Soltar creencias limitantes abre espacio para nuevas verdades.",
  question: "¿Qué idea vieja podrías dejar atrás para crecer?"
  },
  {
  quote: "“La mayor riqueza es contentarse con poco.”",
  author: "— Marco Aurelio",
  explanation: "La simplicidad nos libera del peso del exceso y nos acerca a la paz.",
  question: "¿Qué cosa sencilla te da alegría sin necesidad de más?"
  },
  {
  quote: "“El hombre que vive con virtud nunca está en soledad.”",
  author: "— Séneca",
  explanation: "La virtud nos conecta con lo más profundo de la existencia y nos acompaña siempre.",
  question: "¿Qué virtud puedes practicar hoy para sentir compañía interior?"
  },
  {
  quote: "“No es la fortuna la que nos hace libres, sino nuestra actitud hacia ella.”",
  author: "— Epicteto",
  explanation: "La libertad surge de aceptar la vida tal como es, sin resistencia.",
  question: "¿Qué acontecimiento reciente podrías aceptar con gratitud para sentirte más libre?"
  },
  {
  quote: "“El hombre que se domina a sí mismo es más poderoso que el que conquista ciudades.”",
  author: "— Séneca",
  explanation: "La verdadera grandeza está en el autocontrol, no en la conquista externa.",
  question: "¿Qué aspecto de tu vida podrías conquistar hoy con disciplina?"
  },
  {
  quote: "“No es la fortuna la que nos hace sabios, sino nuestra actitud hacia ella.”",
  author: "— Epicteto",
  explanation: "La sabiduría consiste en aceptar lo que llega con serenidad y gratitud.",
  question: "¿Qué acontecimiento reciente podrías aceptar con más calma?"
  },
  {
  quote: "“El hombre sabio no se deja perturbar por la opinión ajena.”",
  author: "— Marco Aurelio",
  explanation: "La paz interior depende de nuestra coherencia, no de la aprobación externa.",
  question: "¿Qué opinión ajena podrías dejar de lado para sentirte más libre?"
  },
  {
  quote: "“La vida es breve, pero suficiente si se vive con propósito.”",
  author: "— Séneca",
  explanation: "El sentido de la vida no depende de su duración, sino de la claridad de su propósito.",
  question: "¿Qué propósito pequeño puedes honrar hoy?"
  },
  {
  quote: "“El hombre que teme la muerte nunca sabrá vivir.”",
  author: "— Epicteto",
  explanation: "El miedo a la muerte nos roba la vida presente; aceptarla nos libera.",
  question: "¿Qué acción podrías realizar hoy como si fuera tu última oportunidad?"
  },
  {
  quote: "“La mayor riqueza es vivir con moderación.”",
  author: "— Marco Aurelio",
  explanation: "La moderación nos da libertad y nos protege de la esclavitud del exceso.",
  question: "¿Qué exceso podrías reducir para sentirte más ligero?"
  },
  {
  quote: "“El hombre sabio se adapta a la naturaleza de las cosas.”",
  author: "— Séneca",
  explanation: "Aceptar la realidad tal como es nos acerca a la serenidad.",
  question: "¿Qué aspecto de la realidad podrías aceptar hoy en lugar de resistir?"
  },
  {
  quote: "“No es la riqueza lo que nos hace grandes, sino la virtud.”",
  author: "— Epicteto",
  explanation: "La grandeza auténtica se mide por la rectitud de nuestras acciones.",
  question: "¿Qué acción virtuosa puedes realizar hoy para sentirte más grande?"
  },
  {
  quote: "“El hombre que vive en armonía consigo mismo vive en armonía con el universo.”",
  author: "— Marco Aurelio",
  explanation: "La paz interior se refleja en nuestra relación con el mundo.",
  question: "¿Qué gesto pequeño podrías hacer hoy para sentir más armonía contigo mismo?"
  },
  {
  quote: "“La vida es como un río: no puedes detener su curso, pero sí aprender a navegarlo.”",
  author: "— Séneca",
  explanation: "Aceptar el flujo de la vida nos permite avanzar con menos resistencia.",
  question: "¿Qué corriente de tu vida podrías aceptar en lugar de luchar contra ella?"
  },
  {
  quote: "“El hombre sabio no se lamenta por lo que no tiene, sino que se alegra por lo que tiene.”",
  author: "— Epicteto",
  explanation: "La gratitud transforma la carencia en abundancia y nos acerca a la serenidad.",
  question: "¿Qué tienes ahora mismo que merece tu gratitud?"
  },
  {
  quote: "“La vida es breve, pero suficiente si se vive con rectitud.”",
  author: "— Marco Aurelio",
  explanation: "La rectitud da sentido a cada instante y convierte la brevedad en plenitud.",
  question: "¿Qué decisión recta puedes tomar hoy para honrar tu vida?"
  },
  {
  quote: "“El hombre que se domina a sí mismo nunca será esclavo de nada.”",
  author: "— Séneca",
  explanation: "El autocontrol nos libera de las cadenas invisibles de los impulsos y deseos.",
  question: "¿Qué impulso podrías controlar hoy para sentirte más libre?"
  },
  {
  quote: "“No es la fortuna la que nos hace felices, sino nuestra actitud hacia ella.”",
  author: "— Epicteto",
  explanation: "La felicidad depende de cómo interpretamos lo que nos toca vivir.",
  question: "¿Qué acontecimiento reciente podrías reinterpretar con gratitud?"
  },
  {
  quote: "“El hombre sabio no busca la riqueza, sino la paz interior.”",
  author: "— Marco Aurelio",
  explanation: "La verdadera abundancia está en la calma del espíritu, no en las posesiones externas.",
  question: "¿Qué acción podrías hacer hoy para cultivar tu paz interior?"
  },
  {
  quote: "“La vida es como un río: no puedes detener su curso, pero sí aprender a navegarlo.”",
  author: "— Séneca",
  explanation: "Aceptar el flujo de la vida nos permite avanzar con menos resistencia.",
  question: "¿Qué corriente de tu vida podrías aceptar en lugar de luchar contra ella?"
  },
  {
  quote: "“El hombre que teme la pobreza nunca será rico.”",
  author: "— Epicteto",
  explanation: "El miedo a perder nos impide disfrutar lo que ya tenemos.",
  question: "¿Qué miedo podrías soltar para sentir más abundancia?"
  },
  {
  quote: "“La mayor victoria es la que se gana sobre uno mismo.”",
  author: "— Marco Aurelio",
  explanation: "Superar nuestras debilidades es más valioso que vencer a otros.",
  question: "¿Qué debilidad personal podrías trabajar hoy para crecer?"
  },
  {
  quote: "“El hombre sabio se adapta a lo inevitable.”",
  author: "— Séneca",
  explanation: "Aceptar lo que no podemos cambiar nos libera del sufrimiento inútil.",
  question: "¿Qué situación inevitable podrías aceptar con más serenidad?"
  },
  {
  quote: "“La libertad no consiste en hacer lo que quieras, sino en querer lo que haces.”",
  author: "— Epicteto",
  explanation: "La verdadera libertad surge de alinear nuestras acciones con nuestros valores.",
  question: "¿Qué actividad cotidiana podrías transformar en un acto de libertad?"
  }
];