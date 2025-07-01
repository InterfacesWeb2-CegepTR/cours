import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/cours/",
  title: "Techniques d’intégration",
  description: "Notes pour le cours Techniques d’intégration des interfaces Web 2",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Travaux pratiques',
        items: [
          { text: 'TP1A', link: '/travaux/tp1a' },
          { text: 'TP1B', link: '/travaux/tp1b' },
          { text: 'TP2', link: '/travaux/tp2' },
          { text: 'TP3', link: '/travaux/tp3' }
        ]
      },
      {
        text: 'Exercices',
        items: [
          { text: 'Exercices du cours', link: '/exercices.md' },
        ]
      },
      {
        text: 'Modules',
        items: [
          { text: 'Module 1', link: '/modules/module1' },
          { text: 'Module 2', link: '/modules/module2' },
          { text: 'Module 3', link: '/modules/module3' },
          { text: 'Module 4', link: '/modules/module4' },
          { text: 'Module 5', link: '/modules/module5' },
          { text: 'Module 6', link: '/modules/module6' },
          { text: 'Module 7', link: '/modules/module7' },
          { text: 'Module 8', link: '/modules/module8' },
          { text: 'Module 9', link: '/modules/module9' },
          { text: 'Module 10', link: '/modules/module10' }
        ]
      },
      {
        text: 'Modules intégration 1',
        items: [
          { text: 'Module 1', link: '/modules-int-1/module1' },
          { text: 'Module 2', link: '/modules-int-1/module2' },
          { text: 'Module 3', link: '/modules-int-1/module3' },
          { text: 'Module 4', link: '/modules-int-1/module4' },
          { text: 'Module 5', link: '/modules-int-1/module5' },
          { text: 'Module 6', link: '/modules-int-1/module6' },
          { text: 'Module 7', link: '/modules-int-1/module7' },
          { text: 'Module 8', link: '/modules-int-1/module8' },
          { text: 'Module 9', link: '/modules-int-1/module9' },
          { text: 'Module 10', link: '/modules-int-1/module10' },
          { text: 'Module 11', link: '/modules-int-1/module11' },
          { text: 'Module 12', link: '/modules-int-1/module12' },
          { text: 'Module 13', link: '/modules-int-1/module13' },
          { text: 'Module 14', link: '/modules-int-1/module14' },
          { text: 'Module 15', link: '/modules-int-1/module15' },
        ]
      }
    ],
    sidebar: [
      {
        text: 'Documents généraux',
        items: [
          { text: 'Plan de cours', link: '/plan-de-cours' },
        ]
      },
      {
        text: 'Modules',
        items: [         
          { text: 'Module 1', link: '/modules/module1' },
          { text: 'Module 2', link: '/modules/module2' },
          { text: 'Module 3', link: '/modules/module3' },
          { text: 'Module 4', link: '/modules/module4' },
          { text: 'Module 5', link: '/modules/module5' },
          { text: 'Module 6', link: '/modules/module6' },
          { text: 'Module 7', link: '/modules/module7' },
          { text: 'Module 8', link: '/modules/module8' },
          { text: 'Module 9', link: '/modules/module9' },
          { text: 'Module 10', link: '/modules/module10' }
        ]
      },
      {
        text: 'Travaux pratiques',
        items: [
          { text: 'TP1A', link: '/travaux/tp1a' },
          { text: 'TP1B', link: '/travaux/tp1b' },
          { text: 'TP2', link: '/travaux/tp2' },
          { text: 'TP3', link: '/travaux/tp3' }
        ]
      },
      {
        text: 'Exercices',
        items: [
          { text: 'Exercices du cours', link: '/exercices.md' },
        ]
      },
                  {
        text: 'Modules intégration 1',
        items: [
          { text: 'Module 1', link: '/modules-int-1/module1' },
          { text: 'Module 2', link: '/modules-int-1/module2' },
          { text: 'Module 3', link: '/modules-int-1/module3' },
          { text: 'Module 4', link: '/modules-int-1/module4' },
          { text: 'Module 5', link: '/modules-int-1/module5' },
          { text: 'Module 6', link: '/modules-int-1/module6' },
          { text: 'Module 7', link: '/modules-int-1/module7' },
          { text: 'Module 8', link: '/modules-int-1/module8' },
          { text: 'Module 9', link: '/modules-int-1/module9' },
          { text: 'Module 10', link: '/modules-int-1/module10' },
          { text: 'Module 11', link: '/modules-int-1/module11' },
          { text: 'Module 12', link: '/modules-int-1/module12' },
          { text: 'Module 13', link: '/modules-int-1/module13' },
          { text: 'Module 14', link: '/modules-int-1/module14' },
          { text: 'Module 15', link: '/modules-int-1/module15' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
})
