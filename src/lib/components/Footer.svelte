<script lang="ts">
  import logoReversed from "$lib/assets/logo_reversed.png";
  import FooterColumn from "./Footer/FooterColumn.svelte";
  import SubscribeNotification from "./Footer/Newsletter.svelte";
  import PaymentInformative from "./Footer/PaymentInformative.svelte";

  import type { ReferenceLink, ColumnDetails } from "$lib/types/helpers";

  const bottomLinks: ReferenceLink[] = [
    {
      text: "Política de privacidad y cookies",
      href: "/politica-de-privacidad-y-cookies",
    },
    {
      text: "Condiciones generales de uso",
      href: "/condiciones-generales-de-uso",
    },
    {
      text: "Derecho de desistimiento",
      href: "/derecho-de-desistimiento",
    },
    {
      text: "Condiciones generales de venta",
      href: "/condiciones-generales-de-venta",
    },
  ];

  const copyrightText = "© 2024 UnionMusical. Todos los derechos reservados";

  const contactColumn: ColumnDetails = {
    name: "Contacto",
    columnItems: [
      {
        text: "Correo electrónico",
        action: () => {},
      },
      {
        text: "+34 93 565 90 00",
      },
      {
        text: "Localizador de tiendas",
        href: "/nuestras-tiendas/localizador",
      },
    ],
  };

  const informationColumn: ColumnDetails = {
    name: "Información",
    columnItems: [
      {
        text: "Planeta UME",
        href: "/planetaume",
      },
      {
        text: "Centro de ayuda",
        href: "/centro-de-ayuda",
      },
      {
        text: "Envíos",
        href: "/envios",
      },
      {
        text: "Financiación",
        href: "/financiacion",
      },
    ],
  };

  const socialColumn: ColumnDetails = {
    name: "RRSS",
    columnItems: [
      {
        text: "Youtube",
        href: "https://www.youtube.com/channel/UCixswYkVMxbzu8p-yjgo1Gg",
      },
      {
        text: "Facebook",
        href: "https://www.facebook.com/umeunionmusical",
      },
      {
        text: "Instagram",
        href: "https://www.instagram.com/umeunionmusical/",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/umeunionmusical",
      },
      {
        text: "Pinterest",
        href: "https://www.pinterest.es/unionmusical/",
      },
    ],
  };

  const footerColumns = [contactColumn, informationColumn, socialColumn];
</script>

<footer class="footer-container">
  <div class="flex flex-col">
    <div class="top-bar">
      <div class="flex flex-col">
        <div class="my-6">
          <a href="/">
            <img src={logoReversed} class="h-12" alt="UnionMusical Logo" />
          </a>
        </div>
        <div class="md:max-w-[25vw] hidden md:flex">
          <p class="description">
            Fundada en 1977, Hol Music Dral es una empresa familiar que es
            distribuidora líder en el sector de instrumentos musicales y audio
            profesional en España y Portugal con 15 tiendas localizadas en las
            principales ciudades de España. <a href="/" class="underline"
              >Conoce la empresa</a
            >
          </p>
        </div>
        <div class="md:mt-12">
          <SubscribeNotification />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-col">
          <div class="flex flex-col md:flex-row justify-between mt-4 mb-12 items-stretch md:items-start">
            {#each footerColumns as column}
              <FooterColumn
                columnName={column.name}
                columnItems={column.columnItems}
              />
            {/each}
          </div>
          <PaymentInformative />
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <p class="copyright-notice">
        {copyrightText}
      </p>
      <div class="bottom-links">
        {#each bottomLinks as reference}
          <a href={reference.href} class="bottom-link-item">
            {reference.text}
          </a>
        {/each}
      </div>
    </div>
  </div>
</footer>

<style lang="postcss">
  * {
    color: #cfcfcf;
  }

  .footer-container {
    @apply bg-primaryDark md:py-8;
  }

  .description {
    @apply text-xs text-wrap text-justify;
  }

  .top-bar {
    @apply flex flex-col md:flex-row mx-6 md:mx-12 py-4 justify-around;
  }

  .bottom-bar {
    @apply flex md:flex-row flex-col-reverse justify-around px-6 md:px-12 py-6 items-center md:border-t border-gray-700;
  }

  .bottom-links {
    @apply flex flex-col md:flex-row md:divide-x gap-4 pb-12 md:pb-0 items-center;
  }

  .bottom-link-item {
    @apply text-xs px-4 hover:underline;
  }

  .copyright-notice {
    @apply text-xs;
  }
</style>
