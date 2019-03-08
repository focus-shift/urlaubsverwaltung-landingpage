import React from "react";
import Page from "../components/Page";

export default function Faq() {
	return (
		<Page title="FAQ">
			<h2 id="abteilungen">Abteilungen</h2>
			<h3 id="wie-werden-abteilungen-mitarbeiter-zugeordnet">
				Wie werden Abteilungen Mitarbeiter zugeordnet?
			</h3>
			<p>
				In der Menüleiste gibt es einen Punkt “Abteilungen”. Hier kann man die
				bestehenden Abteilungen sehen und über das “+”-Symbol neue Abteilungen
				anlegen. Sowohl beim Anlegen als auch beim Bearbeiten einer Abteilung
				können die Mitarbeiter zu der Abteilung zugeordnet werden.
			</p>
			<h3 id="wie-werden-den-abteilungen-abteilungsleiter-zugeordnet">
				Wie werden den Abteilungen Abteilungsleiter zugeordnet?
			</h3>
			<p>
				Damit ein Mitarbeiter überhaupt Abteilungsleiter werden kann, muss er
				die entsprechende Berechtigung erhalten. In der Menüleiste gibt es einen
				Punkt “Benutzer”. Hier können die Benutzer bearbeitet werden und neue
				Benutzer angelegt werden. Beim Anlegen/Bearbeiten eines Benutzers müssen
				auch die Berechtigungen des Benutzers vergeben werden. Hat ein Benutzer
				die Berechtigung, die Urlaubsanträge seiner Abteilungen zu verwalten,
				ist er nun theoretisch in der Lage tatsächlich Abteilungsleiter zu
				werden. Nun geht man über die Menüleiste zu den “Abteilungen”. Hier
				bearbeitet man eine bestehende Abteilung oder legt eine neue an. Beim
				Zuordnen der Mitarbeiter zu einer Abteilung hat man nun bei den
				Benutzern, die die entsprechende Berechtigung haben, die zusätzliche
				Auswahlmöglichkeit “ist Abteilungsleiter”. Wählt man diese aus und
				speichert die Zuordnung ist der entsprechende Benutzer nun
				Abteilungsleiter der bearbeiteten Abteilung.
			</p>
			<h2 id="benutzer">Benutzer</h2>
			<h3 id="welcher-benutzer-bekommt-adminrechte">
				Welcher Benutzer bekommt die Admin-Rechte bei Authentifikation mit
				LDAP/AD?
			</h3>
			<p>
				Nach der erfolgreichen Installation der Urlaubsverwaltung bekommt der
				erste Benutzer, der sich einloggt, automatisch die Rolle OFFICE: darf
				Einstellungen zur Anwendung vornehmen, die Daten aller Mitarbeiter
				verwalten, Urlaub für alle Mitarbeiter beantragen/stornieren und
				Krankmeldungen pflegen
			</p>
			<p>
				Dies liegt daran, dass der erste Benutzer, der sich einloggt,
				normalerweise derjenige ist, der globale Einstellungen wie den E-Mail
				Versand in der Anwendung konfiguriert. Weitere privilegierte Rollen, wie
				z.B. BOSS, müssen von diesem Benutzer vergeben werden.
			</p>
			<p>
				Es ist geplant, das aktuelle Berechtigungskonzept feingranularer zu
				gestalten:
				<a href="https://github.com/synyx/urlaubsverwaltung/issues/467">#467</a>
			</p>
			<h3 id="wo-kann-ich-neue-benutzer-anlegen">
				Wo kann ich neue Benutzer anlegen?
			</h3>
			<p>
				In der Menüleiste gibt es einen Punkt “Benutzer”. Hier können neue
				Benutzer erstellt werden. Hier werden sowohl die Stammdaten (Name etc.)
				des Benutzers gepflegt, als auch sein Urlaubsanspruch und seine
				Arbeitszeit.
			</p>
			<h3 id="wieso-kann-ein-benutzer-keinen-urlaub-beantragen">
				Wieso kann ein Benutzer keinen Urlaub beantragen?
			</h3>
			<p>
				Damit ein Benutzer Urlaub beantragen kann, müssen seine Daten
				vollständig sein. Unter dem Menüpunkt “Benutzer” sieht man eine Liste
				der Benutzer. Klickt man auf einen Benutzer (Klick auf ganze Zeile)
				gelangt man auf die Übersichtsseite des Benutzers. Klickt man auf das
				Details-Icon) gelangt man auf die Übersicht der Daten des Benutzers.
				Hier können die einzelnen Benutzerdaten wie Stammdaten, Arbeitszeiten
				und Urlaubsanspruch durch Klick auf die Editieren-Aktion (Stift-Icon)
				gepflegt werden. Sobald der Benutzer über alle erforderlichen Daten
				verfügt, sollte er auch in der Lage sein, Urlaub zu beantragen.
			</p>
			<h3 id="wie-kann-ich-den-urlaubsanspruch-eines-benutzers-für-das-nächste-jahr-pflegen">
				Wie kann ich den Urlaubsanspruch eines Benutzers für das nächste Jahr
				pflegen?
			</h3>
			<p>
				Bei der Übersicht der Benutzerdaten (vgl. obige Frage) gibt es einen
				Unterpunkt “Urlaubsanspruch”. Die angezeigte Jahreszahl stellt
				standardmäßig das aktuelle Jahr dar. Man kann aber auf die Jahreszahl
				klicken, um ein anderes Jahr auszuwählen. So kann man bspw. das nächste
				Jahr auswählen, um den Urlaubsanspruch für das nächste Jahr einzutragen.
			</p>
			<p>
				Das manuelle Eintragen des Urlaubsanspruchs für das nächste Jahr ist
				aber nur dann notwendig, wenn der Urlaubsanspruch für das nächste Jahr
				sich vom diesjährigen unterscheidet. Ansonsten hat der Benutzer im
				nächsten Jahr einfach den gleichen Urlaubsanspruch, den er im aktuellen
				Jahr hat.
			</p>
			<figure>
				<img
					src="https://raw.githubusercontent.com/wiki/synyx/urlaubsverwaltung/img/Holiday_next_year.png"
					alt="Urlaubsanspruch bearbeiten"
				/>
			</figure>
			<h3 id="muss-ich-den-resturlaub-der-benutzer-manuell-eintragen">
				Muss ich den Resturlaub der Benutzer manuell eintragen?
			</h3>
			<p>
				Nein. Zum Anfang eines neuen Jahres (nachts am 1. Januar) läuft
				automatisch ein Prozess, der den Resturlaub für das neue Jahr anhand des
				bis dato genommenen Urlaubs im alten Jahr berechnet.
			</p>
			<p>
				Wenn bereits Resturlaub für das nächste Jahr eingetragen wurde, wird
				dieser am 1. Januar automatisch überschrieben.
			</p>
			<h2 id="email-versand">E-Mail-Versand</h2>
			<h3 id="wo-konfiguriere-ich-email-versand">
				Wo konfiguriere ich den E-Mail-Versand?
			</h3>
			<p>
				In der Menüleiste gibt es einen Punkt “Einstellungen”. Hier kann man
				konfigurieren, ob der E-Mail-Versand überhaupt aktiv sein soll und
				ferner wie Mail Server und andere Konfigurationen lauten.
			</p>
			<h3 id="die-links-zu-gestellten-urlaubsanträgen-in-den-verschickten-e-mails-sind-nicht-korrekt-was-kann-ich-tun">
				Die Links zu gestellten Urlaubsanträgen in den verschickten E-Mails sind
				nicht korrekt, was kann ich tun?
			</h3>
			<p>
				Wie die Basis URL der Links in den verschickten E-Mails aussieht, wird
				ebenfalls unter dem Punkt “Einstellungen” konfiguriert. Hier gibt es ein
				Textfeld für “Basis URL der Anwendung für Links in E-Mails”. Die hier
				eingestellte URL wird herangezogen, um die Links zusammen zu bauen, die
				in den E-Mails verwendet werden.
			</p>
			<h3 id="wie-kann-ich-den-e-mail-versand-für-bestimmte-benutzer-deaktivieren">
				Wie kann ich den E-Mail-Versand für bestimmte Benutzer deaktivieren?
			</h3>
			<p>
				In der Menüleiste gibt es einen Punkt “Benutzer”. Dort kann man einzelne
				Benutzer bearbeiten. Bei der Zuordnung von Berechtigungen hat man
				zusätzlich die Möglichkeit auszuwählen, ob die E-Mail-Benachrichtigung
				zur jeweiligen Berechtigung aktiv oder nicht aktiv sein soll. Die
				E-Mail-Benachrichtigung, die man erhält, wenn der eigene Urlaubsantrag
				genehmigt/abgelehnt/storniert wurde, kann man nicht deaktivieren.
			</p>
			<h2 id="feiertage">Feiertage</h2>
			<h3 id="wie-kann-ich-feiertage-konfigurieren">
				Wie kann ich die geltenden Feiertage für die Urlaubsverwaltung
				konfigurieren?
			</h3>
			<p>
				In der Menüleiste gibt es einen Punkt “Einstellungen”. Hier kann das
				Bundesland ausgewählt werden, dessen geltende Feiertage beim Beantragen
				von Urlaub als 0 Arbeitstage gezählt werden. Außerdem kann konfiguriert
				werden, wie Heiligabend und Silvester behandelt werden: gelten diese als
				gar kein Arbeitstag, als halber Arbeitstag oder als voller Arbeitstag?
			</p>
			<h3 id="kann-ich-für-einen-bestimmten-benutzer-die-geltenden-feiertage-konfigurieren">
				Kann ich für einen bestimmten Benutzer die geltenden Feiertage
				konfigurieren?
			</h3>
			<p>
				Pro Benutzer kann beim Bearbeiten der Benutzerdaten ein Bundesland
				ausgewählt werden, wenn der Benutzer nicht dem systemweit eingestellten
				Bundesland zugehörig ist. Die Feiertage für den Benutzer werden dann
				anhand des benutzerspezifischen Bundeslands berechnet.
			</p>
			<h2 id="krankmeldungen">Krankmeldungen</h2>
			<h3 id="workflow-bei-krankmeldungen">Workflow bei Krankmeldungen</h3>
			<figure>
				<img
					src="https://raw.githubusercontent.com/wiki/synyx/urlaubsverwaltung/workflow/Krankmeldung.png"
					alt="Workflow bei Krankmeldungen"
				/>{" "}
			</figure>
			<h3 id="was-passiert-wenn-eine-krankmeldung-in-einem-urlaubszeitraum-angelegt-wird">
				Was passiert, wenn eine Krankmeldung in einem Urlaubszeitraum angelegt
				wird?
			</h3>
			<p>
				Wenn eine Krankmeldung innerhalb eines gebuchten Urlaubs angelegt wird,
				wird momentan der Urlaub für die Krankheitstage nicht automatisch
				storniert. Man muss den Urlaub händisch stornieren und anschließend die
				Krankmeldung anlegen.
			</p>
			<p>
				Beispiel: Max Mustermann hat Urlaub vom 23.11. - 27.11. und war nun am
				25.11. krank
			</p>
			<p>Vorgehen:</p>
			<ul>
				<li>Man storniert den kompletten Urlaubsantrag (23.11. - 27.11.)</li>
				<li>Man legt eine Krankmeldung für den 25.11. an</li>
				<li>
					Man legt Urlaub für 23.11. - 24.11. plus für den 26.11. - 27.11. an
				</li>
			</ul>
			<h2 id="drucken">Drucken</h2>
			<h3 id="wie-konfiguriere-ich-ausdrucke">
				Wie konfiguriere ich Ausdrucke
			</h3>
			<p>
				Auf manchen Seiten der Urlaubsverwaltung gibt es einen “Drucken” Button.
				Dieser löst ein Drucken der aktuellen Webseite aus. Dies ist nur eine
				Abkürzung, um die aktuelle Webseite zu drucken. Man könnte auch die
				Webseite über die Standard-Druckfunktion des Browsers ausdrucken. Wie
				man bspw. im Firefox Webseiten druckt, kann man{" "}
				<a href="https://support.mozilla.org/de/kb/Eine-Webseite-drucken">
					hier
				</a>{" "}
				nachlesen.
			</p>
			<p>
				Manche Seiten der Urlaubsverwaltung haben sehr viel horizontalen Inhalt,
				können daher nur im Querformat gedruckt werden. Beim Auslösen des Drucks
				ist dann also darauf zu achten, dass beim Punkt “Ausrichtung” der Wert
				“Querformat” aktiviert ist:
			</p>
			<figure>
				<img
					src="https://raw.githubusercontent.com/wiki/synyx/urlaubsverwaltung/img/Seite_einrichten.png"
					alt="Seite einrichten"
				/>
			</figure>
			<p>
				Man kann sich auch eine Druckvorschau anzeigen lassen, wenn man statt
				über den “Drucken” Button über die normale Druckfunktion des Browsers
				druckt. Dann sieht man auch das jeweilige Verhalten im Quer- und
				Hochformat, vgl.{" "}
				<a href="https://raw.githubusercontent.com/wiki/synyx/urlaubsverwaltung/img/Druckvorschau.png">
					Beispiel Screenshot
				</a>{" "}
			</p>
			<h2 id="exchange">Exchange-Anbindung</h2>
			<h3 id="welche-bedingungen-muss-der-exchange-benutzer-erfuellen">
				Welche Bedingungen muss der Exchange Benutzer erfüllen?
			</h3>
			<p>
				Es wird die E-Mail-Adresse und das Passwort des Exchange Benutzers
				angegeben, der automatisch Termine anlegen soll. Für diese Zugangsdaten
				muss der Autodiscoverdienst funktionieren - am Besten dies vorher
				separat testen.
			</p>
			<p>
				Außerdem muss der Benutzer über folgende Berechtigungen verfügen:
				<ul>
					<li>Kalender anlegen können</li>
					<li>Termine im angegebenen Kalender anlegen können</li>
					<li>
						beim Anlegen von Terminen die entsprechenden Benutzer einladen
						können (E-Mail-Adresse der Benutzer wird hierzu verwendet)
					</li>
				</ul>
			</p>
			<h3 id="muss-der-konfigurierte-kalender-existieren">
				Muss der konfigurierte Kalender existieren?
			</h3>
			<p>
				Bei der Synchronisierung wird überprüft, ob es bereits einen Kalender
				mit dem angegebenen Namen gibt. Wenn kein Kalender mit diesem Namen
				existiert, wird automatisch ein neuer angelegt.
			</p>

			<h2 id="google-calendar">Google-Calendar-Anbindung</h2>
			<p>
				Die Urlaubsverwaltung kann an einen Google Kalender angebunden werden,
				dazu sind folgende Dinge nötig:
			</p>
			<ol type="1">
				<li>
					<strong>Google Kalender API</strong> aktivieren (
					<a href="https://cloud.google.com/apis/docs/enable-disable-apis">
						Enable and disable APIs
					</a>
					)
				</li>
				<li>
					Die <strong>OAuth2 Client Id</strong> als Webanwendung konfigurieren
					(https://console.developers.google.com).
				</li>
				<li>
					Das <strong>OAuth2 Client Secret</strong> bekommt man durch die
					Konfiguration des OAuth Clients.
				</li>
				<li>
					Die <strong>Kalender ID</strong> ist die sogenannte “Kalenderadresse”
					die man in den Kalender Details findet.
				</li>
				<li>
					Die <strong>Weiterleitungs-URL</strong> muss beim OAuth Client als
					“Autorisierte Weiterleitungs-URL” angegeben werden.
				</li>
			</ol>
			<h2 id="ueberstunden">Überstunden</h2>
			<h3 id="kann-ich-die-ueberstundenfunktion-deaktivieren">
				Kann ich die Überstundenfunktion deaktivieren?
			</h3>
			<p>
				Jein. Unter dem Menüpunkt “Einstellungen” beim Tab “Arbeitszeiten” kann
				die Überstundenfunktion deaktiviert werden. Dies hat zur Folge, dass
				keine Überstundeneinträge angelegt werden können. Außerdem wird die
				Überstundenübersicht auf der persönlichen Übersichtsseite ausgeblendet.
			</p>
			<p>
				Sollte die Überstundenfunktion in der Vergangenheit genutzt worden sein
				und wird nachträglich deaktiviert, so hat dies keine Auswirkung auf die
				bestehenden Überstundeneinträge; diese bleiben erhalten. Es können
				allerdings keine neuen Überstundeneinträge angelegt werden.
			</p>
			<h3 id="wer-wird-informiert-wenn-ein-überstundeneintrag-angelegt-wurde">
				Wer wird informiert, wenn ein Überstundeneintrag angelegt wurde?
			</h3>
			<p>
				Wenn ein Überstundeneintrag erstellt wurde oder ein bereits bestehender
				editiert wurde, erhalten die Benutzer, die die Office Berechtigung haben
				und bei denen die entsprechende E-Mail-Benachrichtigung aktiv ist, eine
				E-Mail.
			</p>
			<p>
				Voraussetzung: Der E-Mail-Versand ist unter dem Menüpunkt
				“Einstellungen” aktiviert und korrekt konfiguriert.
			</p>
			<h2 id="urlaub">Urlaub</h2>
			<h3 id="workflow-bei-urlaubsantraegen">Workflow bei Urlaubsanträgen</h3>
			<figure>
				<img
					src="https://raw.githubusercontent.com/wiki/synyx/urlaubsverwaltung/workflow/Urlaub.png"
					alt="Workflow bei Urlaubsanträgen"
				/>
			</figure>
			<h3 id="wer-genehmigt-urlaub">Wer genehmigt Urlaub?</h3>
			<p>
				Der Urlaub kann entweder vom Abteilungsleiter des Mitarbeiters oder von
				globalen Chefs genehmigt werden.
			</p>
			<h3 id="wird-der-im-urlaubsantrag-ausgewählte-vertreter-informiert">
				Wird der im Urlaubsantrag ausgewählte Vertreter informiert?
			</h3>
			<p>
				Der Vertreter erhält eine Mitteilung per E-Mail, vorausgesetzt der
				E-Mail-Versand ist unter dem Menüpunkt “Einstellungen” aktiviert und
				korrekt konfiguriert.
			</p>
			<h3 id="wer-wird-informiert-wenn-ein-urlaubsantrag-gestellt-wurde">
				Wer wird informiert, wenn ein Urlaubsantrag gestellt wurde?
			</h3>
			<p>
				Wenn ein Urlaubsantrag gestellt wurde, erhalten sowohl Abteilungsleiter
				des Mitarbeiters als auch globale Chefs eine E-Mail-Benachrichtigung.
				(vorausgesetzt bei diesen Personen ist die entsprechende
				E-Mail-Benachrichtigung aktiviert)
			</p>
			<p>
				Voraussetzung: Der E-Mail-Versand ist unter dem Menüpunkt
				“Einstellungen” aktiviert und korrekt konfiguriert.
			</p>
			<h3 id="wer-wird-informiert-wenn-ein-urlaubsantrag-genehmigt-wurde">
				Wer wird informiert, wenn ein Urlaubsantrag genehmigt wurde?
			</h3>
			<p>
				Wenn ein Urlaubsantrag genehmigt wurde, erhalten sowohl der betroffene
				Mitarbeiter als auch die Office Nutzer eine E-Mail-Benachrichtigung.
				(vorausgesetzt beim Office ist entsprechende E-Mail-Benachrichtigung
				aktiviert)
			</p>
			<p>
				Voraussetzung: Der E-Mail-Versand ist unter dem Menüpunkt
				“Einstellungen” aktiviert und korrekt konfiguriert.
			</p>
			<h3 id="wer-wird-informiert-wenn-ein-urlaubsantrag-abgelehnt-wurde">
				Wer wird informiert, wenn ein Urlaubsantrag abgelehnt wurde?
			</h3>
			<p>
				Wenn ein Urlaubsantrag abgelehnt wurde, erhält nur der betroffene
				Mitarbeiter eine E-Mail.
			</p>
			<h3 id="wie-funktioniert-der-zweistufige-genehmigungsprozess-von-urlaubsanträgen">
				Wie funktioniert der zweistufige Genehmigungsprozess von
				Urlaubsanträgen?
			</h3>
			<p>
				Der einfache Genehmigungsprozess für Urlaubsanträge sieht vor, dass
				Urlaubsanträge von einem Abteilungsleiter oder Chef genehmigt werden.
			</p>
			<p>
				Beim zweistufigen Genehmigungsprozess wäre der Urlaubsantrag nach der
				Genehmigung durch den zuständigen Abteilungsleiter nur vorläufig
				genehmigt. Die endgültige Freigabe erfolgt durch einen Benutzer mit der
				Berechtigung zur Freigabe.
			</p>
			<p>
				Voraussetzungen: Wie beim Abteilungsleiter muss der Freigabe
				Verantwortliche der Abteilung zugeordnet sein, für deren Mitarbeiter er
				zuständig ist. Des Weiteren muss der zweistufige Genehmigungsprozess für
				die einzelnen Abteilungen aktiviert werden. So lassen sich beide
				Workflows für jeweils verschiedene Abteilungen nutzen.
			</p>
			<h3 id="wie-kann-ich-die-art-des-urlaubs-bei-einem-urlaubsantrag-bearbeiten">
				Wie kann ich die Art des Urlaubs bei einem Urlaubsantrag bearbeiten?
			</h3>
			<p>
				Aktuell ist es noch nicht möglich, bestehende Urlaubsanträge zu
				bearbeiten. (offenes Issue #12)
			</p>
			<p>
				Um die Art des Urlaubs bei einem Urlaubsantrag zu bearbeiten, gibt es
				folgende Möglichkeiten:
			</p>
			<p>
				<strong>Oberfläche</strong>: Als privilegierter Benutzer den
				Urlaubsantrag stornieren und einen neuen Urlaubsantrag mit der korrekten
				Art des Urlaubs für den gleichen Zeitraum stellen.
			</p>
			<p>
				<strong>Datenbank</strong>: In der Datenbank der Urlaubsverwaltung in
				der Tabelle <code>Application</code> den entsprechenden Urlaubsantrag
				heraussuchen und den Wert im Feld <code>VacationType_id</code> anpassen
				auf die ID der gewünschten Urlaubsart, z.B. <code>3000</code> für{" "}
				<code>UNPAIDLEAVE</code>. Welche ID hier eingetragen werden muss, kann
				in der Tabelle <code>VacationType</code> nachgesehen werden.
			</p>
			<h2 id="wie-funktioniert-der-übergang-zwischen-zwei-jahren">
				Wie funktioniert der Übergang zwischen zwei Jahren?
			</h2>
			<p>
				Der Urlaub der im bisherigen Jahr noch nicht genommen wurde wird in das
				folgende Jahr übernommen. Diese Übernahme passiert in den
				Standard-Einstellungen am 1.1. des Folgejahres um 05:00 Uhr. Der
				übernommene Resturlaub beinhaltet alle bis zum 31.12. nicht genommenen
				Urlaubstage. Dieser Resturlaub kann dann bis zum Ende des Monats März
				genommen werden. Hier soll es Raum geben für Fragen, die bei der
				Benutzung der Urlaubsverwaltung aufkommen können. Der Fragenkatalog
				erhebt keinen Anspruch auf Vollständigkeit und befindet sich im
				ständigen Wachstum und in Veränderung.
			</p>
		</Page>
	);
}
