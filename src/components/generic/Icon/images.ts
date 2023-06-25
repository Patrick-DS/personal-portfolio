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

export enum ImageNames {
	AWS = "aws",
	DJANGO = "django",
	FLASK = "flask",
	JS = "js",
	NEST = "nest",
	TS = "ts",
	DOCKER = "docker",
	FIREBASE = "firebase",
	GOOGLE_ANALYTICS = "googleAnalytics",
	NEXTJS = "nextjs",
	KUBERNETES = "kubernetes",
	MONGO = "mongo",
}

export const iconImages = {
	[ImageNames.AWS]: {
		[ThemeNames.LIGHT]: awsLogoLight,
		[ThemeNames.DARK]: awsLogoDark,
	},
	[ImageNames.DJANGO]: {
		[ThemeNames.LIGHT]: djangoLogoLight,
		[ThemeNames.DARK]: djangoLogoDark,
	},
	[ImageNames.FLASK]: {
		[ThemeNames.LIGHT]: flaskLogoLight,
		[ThemeNames.DARK]: flaskLogoDark,
	},
	[ImageNames.JS]: {
		[ThemeNames.LIGHT]: jsLogoLight,
		[ThemeNames.DARK]: jsLogoDark,
	},
	[ImageNames.NEST]: {
		[ThemeNames.LIGHT]: nestLogoLight,
		[ThemeNames.DARK]: nestLogoDark,
	},
	[ImageNames.TS]: {
		[ThemeNames.LIGHT]: tsLogoLight,
		[ThemeNames.DARK]: tsLogoDark,
	},
	[ImageNames.DOCKER]: {
		[ThemeNames.LIGHT]: dockerLogoLight,
		[ThemeNames.DARK]: dockerLogoDark,
	},
	[ImageNames.FIREBASE]: {
		[ThemeNames.LIGHT]: firebaseLogoLight,
		[ThemeNames.DARK]: firebaseLogoDark,
	},
	[ImageNames.GOOGLE_ANALYTICS]: {
		[ThemeNames.LIGHT]: googleAnalyticsLogoLight,
		[ThemeNames.DARK]: googleAnalyticsLogoDark,
	},
	[ImageNames.NEXTJS]: {
		[ThemeNames.LIGHT]: nextjsLogoLight,
		[ThemeNames.DARK]: nextjsLogoDark,
	},
	[ImageNames.KUBERNETES]: {
		[ThemeNames.LIGHT]: kubernetesLogoLight,
		[ThemeNames.DARK]: kubernetesLogoDark,
	},
	[ImageNames.MONGO]: {
		[ThemeNames.LIGHT]: mongoLogoLight,
		[ThemeNames.DARK]: mongoLogoDark,
	},
}