$ErrorActionPreference = 'Stop'
$headers = @{ 'User-Agent' = 'request' }
$repos = Invoke-RestMethod -Uri 'https://api.github.com/users/charly-codes1/repos?per_page=100' -Headers $headers
$filtered = $repos | Where-Object { $_.description -and $_.languages_url }
$filtered | Select-Object name, description, created_at | ConvertTo-Json -Depth 4
