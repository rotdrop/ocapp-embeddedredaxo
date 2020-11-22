<?php
/*
 * Redaxo4Embedded -- Embed Redaxo4 into NextCloud with SSO.
 *
 * @author Claus-Justus Heine
 * @copyright 2020 Claus-Justus Heine <himself@claus-justus-heine.de>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.o
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 */

style($appName, $webPrefix);
script($appName, $webPrefix);

?>

<div id="<?php echo $webPrefix; ?>_container" class="<?php echo $cssClass; ?>">
  <img src="<?php echo $urlGenerator->imagePath($appName, 'loader.gif'); ?>" id="<?php echo $webPrefix; ?>Loader" class="<?php echo $cssClass; ?>">
  <div id="<?php echo $webPrefix; ?>FrameWrapper" class="<?php echo $cssClass; ?>">
    <iframe style="overflow:auto"
            src="<?php echo $externalURL.$externalPath;?>"
            id="<?php echo $webPrefix; ?>Frame"
            name="<?php echo $appName; ?>"
            width="100%"
            <?php echo $iframeAttributes; ?>>
    </iframe>
  </div>
</div>
