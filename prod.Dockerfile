FROM node:lts

WORKDIR /usr/app/

ARG NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID

COPY package.json package-lock.json ./

RUN npm install -g npm

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --production


FROM node:alpine

WORKDIR /usr/app/

ARG ALLUVIUM_DB_URI

ENV NODE_ENV production
ENV ALLUVIUM_DB_URI=${ALLUVIUM_DB_URI}

# RUN addgroup -g 1001 -S nodejs

# RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=0 /usr/app/next.config.js .
COPY --from=0 /usr/app/public ./public
COPY --from=0 /usr/app/.next ./.next
COPY --from=0 /usr/app/node_modules ./node_modules
COPY --from=0 /usr/app/package.json ./package.json

# USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "run", "start"]
