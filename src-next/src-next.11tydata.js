const demo =
	"https://urlaubsverwaltung.demo.urlaubsverwaltung.cloud/oauth2/authorization/oidc";

export default {
	links: {
		login: "https://registry.apps.urlaubsverwaltung.cloud/login/redirect",
		registration: "https://registry.apps.urlaubsverwaltung.cloud/registration",
		demo: {
			office: `${demo}?login_hint=office`,
			boss: `${demo}?login_hint=boss`,
			user: `${demo}?login_hint=user`,
		},
		github: "https://github.com/urlaubsverwaltung",
		linkedIn: "#",
		individualPriceRequest:
			"mailto:info@urlaubsverwaltung.cloud?subject=Anfrage%20individuelles%20Angebot",
		onPremiseSupportRequest:
			"mailto:info@urlaubsverwaltung.cloud?subject=Anfrage%20On%20Premise%20Support",
		onPremiseInstallationRequest:
			"mailto:info@urlaubsverwaltung.cloud?subject=Anfrage%20On%20Premise%20Installation",
		// TODO links
		googlePlayStore: "#",
		appleAppStore: "#",
	},
};
