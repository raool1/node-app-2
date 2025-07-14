trigger:
- master

pool:
  name: Default  # Your self-hosted agent pool name

variables:
  artifactName: 'nodeapp-artifact'
  buildDir: '$(Build.ArtifactStagingDirectory)/app'

steps:
# 1️⃣ Use Node.js 18
- task: UseNode@1
  inputs:
    version: '18.x'
  displayName: 'Use Node.js 18'

# 2️⃣ Install Dependencies
- script: |
    npm install
  displayName: '📦 Install dependencies'

# 3️⃣ (Optional) Build
- script: |
    npm run build || echo "No build step"
  displayName: '🏗️ Build the app'

# 4️⃣ Copy files to staging
- task: CopyFiles@2
  inputs:
    SourceFolder: '$(Build.SourcesDirectory)'
    Contents: '**'
    TargetFolder: '$(buildDir)'
  displayName: '📁 Copy to staging dir'

# 5️⃣ Publish Artifacts
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: '$(artifactName)'
    publishLocation: 'Container'
  displayName: '📦 Publish Artifact'

# 6️⃣ Deploy using PM2
- script: |
    echo "📦 Installing PM2..."
    sudo npm install -g pm2

    echo "🚀 Deploying app..."
    rm -rf ~/node-deploy && mkdir ~/node-deploy
    cp -r $(buildDir)/* ~/node-deploy

    cd ~/node-deploy
    npm install

    pm2 delete my-node-app || true
    pm2 start index.js --name my-node-app --watch
    pm2 save
  displayName: '🚀 Deploy & Start with PM2'
