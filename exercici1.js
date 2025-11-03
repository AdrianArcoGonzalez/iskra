/*Com podem veure al diagrama de partida, els usuaris tenen una operació que torna
l'import total pagat per tots els serveis que han sol·licitat. El preu d'un servei es
calcula de la manera següent:

• Per a tots els usuaris que volen veure un contingut multimèdia per streaming,
s'aplica el preu d’streaming d'aquest contingut multimèdia.

• Per a tots els usuaris que volen descarregar un contingut multimèdia de la
plataforma, aplica el preu de descàrrega d'aquest contingut multimèdia.

• Si el contingut és premium, en qualsevol dels casos anteriors s'afegeix el càrrec
addicional especificat a l'atribut additionalFee.
*/

class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach(service, (index) => {
      let multimediaContent = service.getMultimediaContent();

      if (typeof service === StreamingService) {
        total += multimediaContent.streamingPrice;
      } else if (typeof service == DownloadService) {
        total += multimediaContent.downloadPrice;
      }

      if (typeof multimediaContent == PremiumContent) {
        total += multimediaContent.additionalFee;
      }
    });

    return total;
  }
}

/*


Revisem el pseudocodi de l'operació getTotal de la classe RegisteredUser i ens
preocupa que el seu disseny sigui una mica fràgil ja que no veiem clar si
contempla els possibles escenaris futurs i el seu impacte:

1. Quins problemes detectes a l'operació i raona la resposta

2. Proposa una solució alternativa (també en pseudocodi del mateix estil)
que corregeixi els problemes de l'operació getTotal de Registered User
que has detectat en la pregunta anterior. Realitza tots els canvis que
consideris necessaris en qualsevol de les classes del model de l'enunciat.
*/

// Correcció dels problemes detectats:

/*


1. Problemes detectats:

- Lògica de càlcul col·locada a RegisteredUser en lloc de delegar-se als serveis/continguts (fa el codi fràgil davant canvis futurs).

- Falta d'extensibilitat: Si es volen afegir nous criteris de càlcul de preus en el futur,

- L'ús de "typeof" per determinar el tipus de servei i el not strict equal
- La lògica per calcular el preu es repeteix dins del bucle, fent que el codi sigui menys llegible i més propens a errors.

 serà necessari modificar aquesta operació, la qual cosa viola el principi d'open/closed.
 
 - Falta validació si un servei no implementa getMultimediaContent() o si l'API canvia.



2. Solució alternativa:*/

class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    return this.services.reduce((total, service) => {
      if (typeof service.getPrice !== "function") {
        throw new Error("Cada servei ha de implementar getPrice()");
      }
      return total + service.getPrice();
    }, 0);
  }
}

// La resta de classes amb els canvis necessaris:
class PremiumContent {
  constructor(streamingPrice = 0, downloadPrice = 0, additionalFee = 0) {
    this.streamingPrice = streamingPrice;
    this.downloadPrice = downloadPrice;
    this.additionalFee = additionalFee;
  }
}

class StreamingService {
  constructor(multimediaContent) {
    this.content = multimediaContent;
  }
  getPrice() {
    const base = this.content.streamingPrice || 0;
    const extra =
      this.content instanceof PremiumContent ? this.content.additionalFee : 0;
    return base + extra;
  }
  getMultimediaContent() {
    return this.content;
  }
}

class DownloadService {
  constructor(multimediaContent) {
    this.content = multimediaContent;
  }
  getPrice() {
    const base = this.content.downloadPrice || 0;
    const extra =
      this.content instanceof PremiumContent ? this.content.additionalFee : 0;
    return base + extra;
  }
  getMultimediaContent() {
    return this.content;
  }
}
