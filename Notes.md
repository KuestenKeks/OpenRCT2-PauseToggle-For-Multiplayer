# ToDos
- [x] Nur als Server ausführen? Nur der braucht die Chatnachrichten ja zu verarbeiten.
- [x] Infos wie auslösenden Spieler anzeigen
  - geht nicht als park.postMessage.. Das wird nicht angezeigt wenn das Spiel pausiert ist.
  - dann wohl nur als ChatMessage?
- [x] auf Berechtigung prüfen
- [ ] Button einbauen statt ChatMsg?! Nur ein Client braucht den Button, Host hat ja den normalen Button.
  - Müsste ich dafür eine eigene network.action definieren und den Server darauf subscriben lassen? Und er Button löst die action aus? :s
