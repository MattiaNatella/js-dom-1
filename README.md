Primi passi col DOM

===

**Consegna**
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
**BONUS**
Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta “Spegni”
- Al secondo click la lampadina si spegne e nel bottone compare la scritta “Accendi”
- E così via...

**LOGICA**

1.Creo una pagina HTML inserendo  2 tag IMG (inserirò l'immagine tramite Javascript) una con la lampadina accesa ed una spenta
2.Imposto una classe su CSS che avrà display: none come caratteristica e la assegnerò alla lampadina spenta
3.Creo un bottone che al click attiverà una funzione anonima che cambierà il tipo display di entrambe le lampadine per far si che si sostituiscano l'una all'altra, ed imposterò il contenuto del bottone in base allo stato della lampadina