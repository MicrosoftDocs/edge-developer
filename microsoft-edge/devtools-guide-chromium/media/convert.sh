for filename in *.png; do\
  convert $filename -crop 1842x918+123+234 "nochrome/$filename"
  echo "$filename done"
  mv $filename done/
done

