FROM node:lts

#RUN apk add --no-cache libc6-compat

WORKDIR /usr/app/

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build && npm install --production --ignore-scripts --prefer-offline


FROM node:alpine

WORKDIR /usr/app/

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs

RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=0 /usr/app/next.config.js ./
COPY --from=0 /usr/app/public ./public
COPY --from=0 --chown=nextjs:nodejs /usr/app/.next ./.next
COPY --from=0 /usr/app/node_modules ./node_modules
COPY --from=0 /usr/app/package.json ./package.json

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]
