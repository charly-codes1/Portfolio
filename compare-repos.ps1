$ErrorActionPreference = 'Stop'
$headers = @{ 'User-Agent' = 'request' }
$all = Invoke-RestMethod -Uri 'https://api.github.com/users/charly-codes1/repos?per_page=100' -Headers $headers
$filtered = $all | Where-Object { $_.description -and $_.languages_url }
$allNames = $all | Select-Object -ExpandProperty name
$filteredNames = $filtered | Select-Object -ExpandProperty name
$missing = $allNames | Where-Object { $filteredNames -notcontains $_ }

Write-Host "=== All public repos (count:$($allNames.Count)) ==="
$all | Select-Object name, description, created_at | Format-Table -AutoSize
Write-Host "`n=== Filtered repos (will show on site) (count:$($filteredNames.Count)) ==="
$filtered | Select-Object name, description, created_at | Format-Table -AutoSize
Write-Host "`n=== Public repos excluded by filter (count:$($missing.Count)) ==="
$missing | ForEach-Object { Write-Host $_ }
