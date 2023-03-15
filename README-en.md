# www.messenger-matrix.de

The messenger matrix provides an overview of the various (technical) features of diverse messengers.

The matrix is hosted on <a href="https://www.messenger-matrix.de/">www.messenger-matrix.de</a>.

# Things to know about the Matrix [FAQ]

## Focuses

The matrix is divided into different focal points. These are:
* System Support
* Security & data protection
* Sustainability
* Functions
* Backup

## Why is Messenger XY not included?

The messenger matrix takes into account some messengers - but by far not all. Before the existing matrix is expanded, the following criteria, among others, are checked:

* **Distribution**: A messenger should have a certain level of users or penetration before it is included in the matrix.
* **Fork**: Is this a new Messenger or a <a href="https://de.wikipedia.org/wiki/Fork">fork</a>? Forks are not considered in the Messenger matrix. Otherwise, the matrix simply becomes confusing and cluttered.
* **Open source**: Is the messenger open source or can the source code be viewed by anyone? It makes little sense to include another "unknown" messenger in the matrix that doesn't even meet the minimum requirements for transparency and IT security. There are already plenty of negative examples.

After an assessment of these criteria, a decision is then made whether to include a messenger in the matrix.

The Messenger <a href="https://getsession.org/">Session</a>, for example, is not included in the matrix for several reasons: It is a fork of Signal, which has also changed the encryption protocol and removed <a href="https://de.wikipedia.org/wiki/Perfect_Forward_Secrecy">Perfect Forward Secrecy</a> (PFS), among other things. 

## Evaluation / Assessment

The evaluation or assessment of individual cells can be argued or discussed. A few examples:

* **Encryption protocol / library**: The <a href="https://de.wikipedia.org/wiki/Signal-Protokoll">Signal protocol</a> is considered the "gold standard" for message encryption/exchange. Some developers therefore implement the protocol in their messengers, but make adjustments to the original protocol (e.g. removal of <a href="https://de.wikipedia.org/wiki/Perfect_Forward_Secrecy">Perfect Forward Secrecy</a>) that have a negative impact on security, among other things. This leads to devaluation or display in yellow color for the affected messengers.
* **Backup (Encrypted) -> WhatsApp**: The controversial messenger WhatsApp stores backups encrypted in the Google cloud (Google Drive). Critical users are calling for the cell to be colored in red to warn that this undermines end-to-end encryption. This is true, as you can read in the <a href="https://faq.whatsapp.com/android/chats/about-google-drive-backups/?lang=de">WhatsApp-FAQ</a>. However, this circumstance does not play a role in the evaluation of this cell. What matters is whether a backup is encrypted (green) or unencrypted (red). In WhatsApp's case, the backup is encrypted - but it is questionable who has control over the keys in the end. The yellow signal color is a compromise at this point.

## Subjective assessment

The last line "Recommendation" is based on objective criteria and combines them with my personal experience. If you want to understand my assessment better, you should read the article series "<a href="https://www.kuketz-blog.de/die-verrueckte-welt-der-messenger-messenger-teil1/">Die verrückte Welt der Messenger</a>" and take a look at the <a href="https://www.kuketz-blog.de/empfehlungsecke/#messenger">recommendation corner (category Messenger)</a>.

However, one thing should be clear: Such a matrix only serves as an orientation. Depending on the weighting of the individual criteria and personal requirements, everyone will probably come to a different assessment/recommendation. That is perfectly okay, because there is no such thing as the "best" or "safest" messenger.

## Collaboration

If you have suggestions for improvements, corrections or comments, please submit them via issue/pull request via <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">Codeberg</a>. There, all changes to the matrix can be tracked transparently.

# Copyright and license

The Messenger Matrix is a project of <a href="https://www.kuketz-blog.de/">Kuketz-Blog</a> and is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">CC BY-SA 4.0-Lizenz</a>. The <a href="https://codeberg.org/kuketzblog/www.messenger-matrix.de">source code</a> is free for everyone to see.