# www.messenger-matrix.de

The messenger matrix provides an overview of the various (technical) features of diverse messengers.

The matrix is hosted on <a href="https://www.messenger-matrix.de/">www.messenger-matrix.de</a>:
* <a href="https://www.messenger-matrix.de/messenger-matrix.html">German version</a>
* <a href="https://www.messenger-matrix.de/messenger-matrix-en.html">English version</a>

### Read this in other languages: <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">German</a>

# Things to know about the Matrix [FAQ]

## Focuses

The matrix is divided into different focal points. These are:
* System Support
* Security & data protection
* Sustainability
* Functions
* Backup

## Why is Messenger XY not included?

The messenger matrix takes messengers into account, but not collaboration/communication platforms such as <a href="https://en.wikipedia.org/wiki/Microsoft_Teams">Microsoft Teams</a>, <a href="https://en.wikipedia.org/wiki/Slack_(software)">Slack</a>, <a href="https://en.wikipedia.org/wiki/Mattermost">Mattermost</a> or Rocket.Chat. Before the existing matrix is expanded, the following criteria, among others, are checked:

* **Distribution**: A messenger should have a certain level of users (100 thousand) or penetration before it is included in the matrix.
* **Fork**: Is this a new Messenger or a <a href="https://en.wikipedia.org/wiki/Fork_(software_development)">fork</a>? Forks are not considered in the Messenger matrix. Otherwise, the matrix simply becomes confusing and cluttered.
* **Open source**: Is the messenger open source or can the source code be viewed by anyone? It makes little sense to include another »unknown« messenger in the matrix that doesn't even meet the minimum requirements for transparency and IT security. There are already plenty of negative examples.
* **Development stage**: A messenger should at least have basic functions such as functioning encryption, reliable receipt of messages in individual and group chats and a user-friendly interface.

After an assessment of these criteria, a decision is then made whether to include a messenger in the matrix.

The Messenger <a href="https://getsession.org/">Session</a>, for example, is not included in the matrix for several reasons: It is a fork of Signal, which has also weakened the encryption protocol and removed <a href="https://en.wikipedia.org/wiki/Forward_secrecy">Perfect Forward Secrecy</a> (PFS), among other things.

Concept messengers such as <a href="https://cwtch.im/">Cwtch</a> or <a href="https://berty.tech/">Berty</a> are also not included in the matrix. Although they have been around for several years, they have not yet managed to move from the development stage to a practically usable application.

## Evaluation / Assessment

The evaluation or assessment of individual cells can be argued or discussed. A few examples:

* **Encryption protocol / library**: The <a href="https://en.wikipedia.org/wiki/Signal_Protocol">Signal protocol</a> is considered the »gold standard« for message encryption/exchange. Some developers therefore implement the protocol in their messengers, but make adjustments to the original protocol (e.g. removal of <a href="https://en.wikipedia.org/wiki/Forward_secrecy">Perfect Forward Secrecy</a>) that have a negative impact on security, among other things. This leads to devaluation or display in yellow color for the affected messengers.
* **Backup (Encrypted) -> WhatsApp**: The controversial messenger WhatsApp stores its backups in encrypted form, but not <a href="https://en.wikipedia.org/wiki/End-to-end_encryption">end-to-end encrypted</a> in the Google cloud (Google Drive). Critical users are urging that the cell be marked in red to warn of a possible circumvention of end-to-end encryption. In fact, the <a href="https://faq.whatsapp.com/407643231403807/?cms_platform=android">WhatsApp FAQ</a> confirms these concerns and also explains how the <a href="https://faq.whatsapp.com/1246476872801203?locale=en_US">option for end-to-end encrypted backups</a> can be activated. However, this aspect is not relevant for the evaluation of the cell. The decisive factor is whether the backup is encrypted (green) or unencrypted (red). In the case of WhatsApp, the backup is encrypted and can be <a href="https://faq.whatsapp.com/1246476872801203?locale=en_US">additionally protected</a>. The yellow marking represents a compromise here.

**Note**: The evaluation of the individual criteria refers exclusively to messengers installed on mobile devices. As soon as multi-device use is added, e.g., a desktop client, the results differ depending on the messenger. Under certain circumstances, multi-device use can weaken security and/or data protection.

## Subjective assessment

The last line »Recommendation« is based on objective criteria and combines them with my personal experience. If you want to understand my assessment better, you should read the article series »<a href="https://www.kuketz-blog.de/die-verrueckte-welt-der-messenger-messenger-teil1/">Die verrückte Welt der Messenger</a>« and take a look at the <a href="https://www.kuketz-blog.de/empfehlungsecke/#messenger">recommendation corner (category Messenger)</a>.

However, one thing should be clear: Such a matrix only serves as an orientation. Depending on the weighting of the individual criteria and personal requirements, everyone will probably come to a different assessment/recommendation. That is perfectly okay, because there is no such thing as the »best« or »safest« messenger.

## Collaboration

If you have suggestions for improvements, corrections or comments, please submit them via issue/pull request via <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">Codeberg</a>. There, all changes to the matrix can be tracked transparently.

## Similar projects

* <a href="https://en.wikipedia.org/wiki/Comparison_of_cross-platform_instant_messaging_clients">Comparison of cross-platform instant messaging clients</a> - wikipedia.de
* <a href="https://eylenburg.github.io/im_comparison.htm">Comparison of Instant Messengers</a> - eylenburg.github.io
* <a href="https://www.securemessagingapps.com/">Secure Messaging Apps Comparison</a> - securemessagingapps.com
* <a href="https://www.freie-messenger.de/systemvergleich/externe_vergleiche/">List with further projects</a> - freie-messenger.de

# Copyright and license

The Messenger Matrix is a project of <a href="https://www.kuketz-blog.de/">Kuketz-Blog</a> and is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0-Lizenz</a>. The <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">source code</a> is free for everyone to see.