<script>
  import { TabItem, Tabs } from "flowbite-svelte";
</script>

<div class="flex flex-col px-4">
  <div class="text-center text-4xl font-[RobotoLight] py-12">
    Últimas noticias de instrumentos y sonido profesional
  </div>
  <Tabs style="underline" defaultClass="flex justify-center">
    <TabItem open title="Todos los contenidos">
      <div>
        <div class="content-grid"></div>
      </div>
    </TabItem>
    <TabItem title="Artículos">
      <div>
        <div class="content-grid"></div>
      </div>
    </TabItem>
    <TabItem open title="Vídeos">
      <div>
        <div class="content-grid"></div>
      </div>
    </TabItem>
    <TabItem title="Planeta UME">
      <div>
        <div class="content-grid"></div>
      </div>
    </TabItem>
  </Tabs>
</div>

<style lang="postcss">
  .content-grid {
    @apply grid grid-cols-2 md:grid-cols-3;
  }
</style>
