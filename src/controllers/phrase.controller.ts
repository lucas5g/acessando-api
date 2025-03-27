import { PhraseService } from "@/services/phrase.service";
import Elysia, { t } from "elysia";

// const phraseService = new PhraseService()
const body = t.Object({
  english: t.String(),
  tag: t.String(),
})

const query = t.Object({
  tag: t.Optional(t.String()),
  portuguese: t.Optional(t.String()),
  english: t.Optional(t.String()),
})

export type QueryPhraseDto = typeof query.static
export type BodyPhraseDto = typeof body.static

export const phraseController = new Elysia({ prefix: '/phrases' })
  .decorate('service', new PhraseService())
  .post('/', ({ service, body }) => service.create(body), { body })
  .get('/', ({  service, query })  => service.findAll(query), { query })



  