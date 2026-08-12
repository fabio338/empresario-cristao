# Empresário Cristão — Landing Page

Landing page estática pronta para publicar na Vercel, com CTA direto para o grupo de WhatsApp e registro opcional de cliques no Supabase.

## Publicar na Vercel
1. Crie um novo projeto e importe esta pasta/repositório.
2. Framework preset: **Other** (site estático).
3. Não é necessário comando de build.
4. Deploy.

## Supabase (opcional, para registrar cliques)
1. No SQL Editor do Supabase, execute `supabase.sql`.
2. Na Vercel, adicione as variáveis de ambiente:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Faça novo deploy.

A chave `SUPABASE_SERVICE_ROLE_KEY` fica somente no servidor (`/api/click.js`) e não é enviada ao navegador.

## Conteúdo pendente
A seção “Fábio Gaspar Mello” está com texto provisório. Substituir pela biografia final quando definida.
