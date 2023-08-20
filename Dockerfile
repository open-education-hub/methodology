FROM ghcr.io/open-education-hub/openedu-builder:0.5.1

# Install curl.
RUN apt-get update && \
    apt-get install -yqq curl

# Install node LTS (16).
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get update && \
    apt-get install -yqq nodejs

# Install Docusaurus.
RUN npm install create-docusaurus@2.1.0

WORKDIR /content

ENTRYPOINT ["oe_builder"]
