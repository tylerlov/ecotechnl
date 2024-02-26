import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Grid from "./components/Grid";
import Feature from "./components/Feature";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import NavBar from "./components/NavBar";
import ProductsandServicesSection from "./components/ProductsandServicesSection";
import MissionSection from "./components/MissionSection";
import TeamSection from "./components/TeamSection";
import TeamMember from "./components/TeamMember";
import MissionStatement from "./components/MissionStatement";
import Footer from "./components/Footer";


storyblokInit({
  accessToken: "fES89FuaVkjCLgkatFgurwtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    hero_section: HeroSection,
    about_section: AboutSection,
    NavBar: NavBar,
    products_services_section: ProductsandServicesSection,
    mission_section: MissionSection,
    mission_statement: MissionStatement,
    team_section: TeamSection,
    team_member: TeamMember,
    footer: Footer
  },
  apiOptions: {
    // for spaces located in the US or China:
    // region: "us" or "cn", // you need to specify the region
    region: ''
  }
});

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);