"use client"
// Third-party imports

// Global imports
import { ThemeNames } from "@/styles"

// Local imports
import awsLogoDark from "./imageFiles/dark/aws.png"
import awsLogoLight from "./imageFiles/light/aws.png"
import djangoLogoDark from "./imageFiles/dark/django.png"
import djangoLogoLight from "./imageFiles/light/django.png"
import flaskLogoDark from "./imageFiles/dark/flask.png"
import flaskLogoLight from "./imageFiles/light/flask.png"
import jsLogoDark from "./imageFiles/dark/js.png"
import jsLogoLight from "./imageFiles/light/js.png"
import nestLogoDark from "./imageFiles/dark/nest.png"
import nestLogoLight from "./imageFiles/light/nest.png"
import tsLogoDark from "./imageFiles/dark/ts.png"
import tsLogoLight from "./imageFiles/light/ts.png"
import dockerLogoDark from "./imageFiles/dark/docker.png"
import dockerLogoLight from "./imageFiles/light/docker.png"
import firebaseLogoDark from "./imageFiles/dark/firebase.png"
import firebaseLogoLight from "./imageFiles/light/firebase.png"
import googleAnalyticsLogoDark from "./imageFiles/dark/google-analytics.png"
import googleAnalyticsLogoLight from "./imageFiles/light/google-analytics.png"
import nextjsLogoDark from "./imageFiles/dark/nextjs.png"
import nextjsLogoLight from "./imageFiles/light/nextjs.png"
import kubernetesLogoDark from "./imageFiles/dark/kubernetes.png"
import kubernetesLogoLight from "./imageFiles/light/kubernetes.png"
import mongoLogoDark from "./imageFiles/dark/mongo.png"
import mongoLogoLight from "./imageFiles/light/mongo.png"

////////////////////////////////////////////////////////////////////////////////

export const iconImages = {
	aws: {
		[ThemeNames.LIGHT]: awsLogoLight,
		[ThemeNames.DARK]: awsLogoDark,
	},
	django: {
		[ThemeNames.LIGHT]: djangoLogoLight,
		[ThemeNames.DARK]: djangoLogoDark,
	},
	flask: {
		[ThemeNames.LIGHT]: flaskLogoLight,
		[ThemeNames.DARK]: flaskLogoDark,
	},
	js: {
		[ThemeNames.LIGHT]: jsLogoLight,
		[ThemeNames.DARK]: jsLogoDark,
	},
	nest: {
		[ThemeNames.LIGHT]: nestLogoLight,
		[ThemeNames.DARK]: nestLogoDark,
	},
	ts: {
		[ThemeNames.LIGHT]: tsLogoLight,
		[ThemeNames.DARK]: tsLogoDark,
	},
	docker: {
		[ThemeNames.LIGHT]: dockerLogoLight,
		[ThemeNames.DARK]: dockerLogoDark,
	},
	firebase: {
		[ThemeNames.LIGHT]: firebaseLogoLight,
		[ThemeNames.DARK]: firebaseLogoDark,
	},
	googleAnalytics: {
		[ThemeNames.LIGHT]: googleAnalyticsLogoLight,
		[ThemeNames.DARK]: googleAnalyticsLogoDark,
	},
	nextjs: {
		[ThemeNames.LIGHT]: nextjsLogoLight,
		[ThemeNames.DARK]: nextjsLogoDark,
	},
	kubernetes: {
		[ThemeNames.LIGHT]: kubernetesLogoLight,
		[ThemeNames.DARK]: kubernetesLogoDark,
	},
	mongo: {
		[ThemeNames.LIGHT]: mongoLogoLight,
		[ThemeNames.DARK]: mongoLogoDark,
	},
}
