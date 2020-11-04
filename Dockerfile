# Use the official image as a parent image.
FROM node:current-slim

# Development or Production.
ENV NODE_ENV=development

# Set the working directory.
WORKDIR /app

# Copy the file from your host to your current location.
COPY ["package.json", "package-lock.json*", "./"]

# Run the command inside your image filesystem.
RUN npm install

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 8080

# Run the specified command within the container.
CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .
