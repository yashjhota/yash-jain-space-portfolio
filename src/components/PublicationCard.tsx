import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, ExternalLink } from 'lucide-react'

interface PublicationCardProps {
  title: string
  authors: string
  conference: string
  status: string
  year: string
  abstract?: string
  link?: string
}

const PublicationCard = ({
  title,
  authors,
  conference,
  status,
  year,
  abstract,
  link
}: PublicationCardProps) => {
  return (
    <Card className="h-full border-border bg-card hover:shadow-md transition-all duration-300 hover:border-secondary/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <BookOpen className="h-6 w-6 text-secondary" />
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <CardTitle className="font-heading text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-1">{authors}</p>
        <p className="text-sm font-medium">{conference}</p>
        <p className="text-xs text-muted-foreground mt-1">{status}</p>
        
        {abstract && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-1">Abstract</h4>
            <p className="text-sm text-muted-foreground">{abstract}</p>
          </div>
        )}
      </CardContent>
      
      {link && (
        <CardFooter>
          <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" size="sm" className="w-full gap-2">
              View Publication <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </CardFooter>
      )}
    </Card>
  )
}

export default PublicationCard