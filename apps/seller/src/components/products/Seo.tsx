import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/base/card';
import InputContainer from '../IntputContainer';
import { Label } from '@repo/ui/components/base/label';
import { Input } from '@repo/ui/components/base/input';
import { Textarea } from '@repo/ui/components/base/textarea';

export default function Seo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Seo</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <InputContainer>
          <Label htmlFor="urlKey">Url key</Label>
          <Input type="text" id="urlKey" className="w-full" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="metaTitle">Meta title</Label>
          <Input type="text" id="metaTitle" className="w-full" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="metaKeywords">Meta keywords</Label>
          <Input type="text" id="metaKeywords" className="w-full" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="metaDescription">Meta description</Label>
          <Textarea className="aspect-2/1" />
        </InputContainer>
      </CardContent>
    </Card>
  );
}
