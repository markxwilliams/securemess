# www.messenger-matrix.de

Die Messenger-Matrix bietet einen Überblick über die verschiedenen (technischen) Merkmale diverser Messenger. 

Die Matrix wird auf <a href="https://www.messenger-matrix.de/">www.messenger-matrix.de</a> gehostet:
* <a href="https://www.messenger-matrix.de/messenger-matrix.html">Deutsche Version</a>
* <a href="https://www.messenger-matrix.de/messenger-matrix-en.html">English Version</a>

### Read this in other languages: <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de/src/branch/main/README-en.md">English</a>

# Wissenswertes zur Matrix [FAQ] 

## Schwerpunkte

Die Matrix unterteilt sich in verschiedene Schwerpunkte. Diese sind:
* Systemunterstützung
* Sicherheit & Datenschutz
* Nachhaltigkeit
* Funktionen
* Backup

## Warum ist Messenger XY nicht dabei?

Die Messenger-Matrix berücksichtigt Messenger, aber keine Kollaborations-/Kommunikationsplattformen wie <a href="https://de.wikipedia.org/wiki/Microsoft_Teams">Microsoft Teams</a>, <a href="https://de.wikipedia.org/wiki/Slack_(Software)">Slack</a>, <a href="https://de.wikipedia.org/wiki/Mattermost">Mattermost</a> oder Rocket.Chat. Vor der Erweiterung der bestehenden Matrix werden unter anderem die nachfolgenden Kriterien geprüft:

* **Verbreitung**: Ein gewisses Maß an Nutzern (100 Tausend) bzw. Verbreitungsgrad sollte ein Messenger haben, bevor er in die Matrix aufgenommen wird.
* **Fork**: Handelt es sich um einen neuen Messenger oder um einen <a href="https://de.wikipedia.org/wiki/Fork">Fork</a>? Forks werden in der Messenger-Matrix nicht berücksichtigt. Ansonsten wird die Matrix schlichtweg unübersichtlich und überladen.
* **Quelloffen**: Ist der Messenger quelloffen bzw. kann der Quellcode von jedem eingesehen werden? Es macht wenig Sinn einen weiteren »unbekannten« Messenger in die Matrix aufzunehmen, der nicht einmal die Mindestanforderungen an Transparenz und damit IT-Sicherheit erfüllt. Negativbeispiele gibt es bereits zur Genüge.
* **Entwicklungsstadium**: Ein Messenger sollte zumindest über grundlegende Funktionen wie eine funktionierende Verschlüsselung, den zuverlässigen Empfang von Nachrichten in Einzel- und Gruppenchats und eine benutzerfreundliche Oberfläche verfügen. 

Nach einer Beurteilung dieser Kriterien wird dann entschieden, ob ein Messenger in die Matrix aufgenommen wird.

Der Messenger <a href="https://getsession.org/">Session</a> wird bspw. aus mehreren Gründen nicht in der Matrix berücksichtigt: Es ist ein Fork von Signal, der dazu auch noch das Verschlüsselungsprotokoll abschwächt und unter anderem <a href="https://de.wikipedia.org/wiki/Perfect_Forward_Secrecy">Perfect Forward Secrecy</a> (PFS) entfernt hat. 

Konzept-Messenger wie <a href="https://cwtch.im/">Cwtch</a> oder <a href="https://berty.tech/">Berty</a> sind ebenfalls nicht in der Matrix enthalten. Obwohl sie bereits seit einigen Jahren existieren, gelingt es ihnen bisher nicht, vom Entwicklungsstadium zu einer praktisch nutzbaren Anwendung überzugehen.

## Bewertung / Beurteilung

Über die Bewertung bzw. Beurteilung einzelner Zellen kann man sich trefflich streiten bzw. diskutieren. Ein paar Beispiele:

* **Verschlüsselungs-Protokoll / -Bibliothek**: Das <a href="https://de.wikipedia.org/wiki/Signal-Protokoll">Signal-Protokoll</a> gilt als »Gold-Standard« bei der Verschlüsselung/Austausch von Nachrichten. Einige Entwickler implementieren das Protokoll daher in ihre Messenger, nehmen allerdings Anpassungen am ursprünglichen Protokoll (bspw. Entfernung von <a href="https://de.wikipedia.org/wiki/Perfect_Forward_Secrecy">Perfect Forward Secrecy</a>) vor, die sich unter anderem negativ auf die Sicherheit auswirken. Dies führt zur Abwertung bzw. zur Darstellung in gelber Farbe bei den betroffenen Messengern.
* **Backup (Verschlüsselt) -> WhatsApp**: Der umstrittene Messenger WhatsApp speichert Backups verschlüsselt in der Google-Cloud (Google Drive). Kritische Nutzer fordern die Einfärbung der Zelle in roter Farbe, um zu warnen, dass hiermit die Ende-zu-Ende-Verschlüsselung ausgehebelt wird. Das stimmt, wie man in der <a href="https://faq.whatsapp.com/android/chats/about-google-drive-backups/?lang=de">WhatsApp-FAQ</a> nachlesen kann. Dieser Umstand spielt bei der Bewertung dieser Zelle allerdings keine Rolle. Entscheidend ist, ob ein Backup verschlüsselt (grün) oder unverschlüsselt (rot) ist. Im Fall von WhatsApp ist das Backup verschlüsselt - allerdings ist fraglich, wer am Ende die Kontrolle über die Schlüssel hat. Die gelbe Signalfarbe ist an dieser Stelle ein Kompromiss.

**Hinweis**: Die Bewertung der einzelnen Kriterien bezieht sich ausschließlich auf Messenger, die auf mobilen Endgeräten installiert sind. Sobald eine Multi-Device-Nutzung, also z.B. ein Desktop-Client hinzukommt, ergeben sich je nach Messenger unterschiedliche Ergebnisse. Unter Umständen kann die Multi-Device-Nutzung die Sicherheit und/oder den Datenschutz schwächen.

## Subjektive Einschätzung 

Die letzte Zeile »Empfehlung« basiert auf objektiven Kriterien und kombiniert diese mit meinen persönlichen Erfahrungswerten. Wer meine Beurteilung besser verstehen bzw. nachvollziehen möchte, der sollte die Artikelserie »<a href="https://www.kuketz-blog.de/die-verrueckte-welt-der-messenger-messenger-teil1/">Die verrückte Welt der Messenger</a>« lesen und einen Blick in die <a href="https://www.kuketz-blog.de/empfehlungsecke/#messenger">Empfehlungsecke (Rubrik Messenger)</a> werfen.

Eines sollte allerdings klar sein: Eine solche Matrix dient lediglich der Orientierung. Je nach Gewichtung der einzelnen Kriterien und persönlichen Anforderungen wird vermutlich jeder zu einer anderen Einschätzung/Empfehlung kommen. Das ist vollkommen okay so, denn den »besten« oder »sichersten« Messenger gibt es nicht.

## Mitarbeit

Wenn du Verbesserungsvorschläge, Korrekturen oder Anmerkungen hast, dann reiche diese bitte per Issue/Pull-Request über <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">Codeberg</a> ein. Dort sind alle Änderungen an der Matrix transparent nachvollziehbar.

## Ähnliche Projekte

* <a href="https://de.wikipedia.org/wiki/Liste_von_Multi-Protokoll-Messengern">Liste von Multi-Protokoll-Messengern</a> - wikipedia.de
* <a href="https://eylenburg.github.io/im_comparison.htm">Comparison of Instant Messengers</a> - eylenburg.github.io
* <a href="https://www.securemessagingapps.com/">Secure Messaging Apps Comparison</a> - securemessagingapps.com
* <a href="https://www.freie-messenger.de/systemvergleich/externe_vergleiche/">Liste mit weiteren Projekten</a> - freie-messenger.de

# Copyright und Lizenz

Die Messenger-Matrix ist ein Projekt des <a href="https://www.kuketz-blog.de/">Kuketz-Blogs</a> und steht unter der <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0-Lizenz</a>. Der <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">Quellcode</a> ist für jeden frei einsehbar. 